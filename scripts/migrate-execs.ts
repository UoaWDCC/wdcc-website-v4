/**
 * One-off migration script to move exec data from the old execs-page global
 * (inline teams → execs arrays) into the new normalized collections
 * (executives + exec-teams).
 *
 * Usage:
 *   pnpm migrate:execs
 *
 * Prerequisites:
 *   - DATABASE_URI env var must be set (or .env file loaded)
 *   - The dev server should have been started at least once so Payload
 *     creates the new tables via push mode
 *
 * Safety:
 *   - Idempotent: skips if exec-teams already has documents
 *   - Does not delete old data from the global's DB row
 */
import path from "path";
import { getPayload } from "payload";
import { fileURLToPath, pathToFileURL } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

async function migrate() {
    const configPath = pathToFileURL(path.resolve(dirname, "../payload.config.ts")).href;
    const configModule = await import(configPath);
    const config = configModule.default;

    const payload = await getPayload({ config });

    // Guard: don't run if exec-teams already has data
    const existingTeams = await payload.find({
        collection: "exec-teams",
        limit: 1,
    });
    if (existingTeams.totalDocs > 0) {
        console.log("exec-teams collection already has data — skipping migration.");
        process.exit(0);
    }

    // Read the old global data.
    // The old inline teams/execs still exist in the DB row because we kept
    // the teams field in the schema. Cast to `any` for the old shape.
    const oldGlobal = (await payload.findGlobal({ slug: "execs-page" })) as any;

    const oldTeams: OldTeam[] = oldGlobal.teams ?? [];
    if (oldTeams.length === 0) {
        console.log("No old team data found in the execs-page global — nothing to migrate.");
        process.exit(0);
    }

    console.log(`Found ${oldTeams.length} team(s) in the old global. Migrating...`);

    // 1. Create executive documents, deduplicating by name
    const execMap = new Map<string, number>(); // exec name → created document ID

    for (const team of oldTeams) {
        for (const exec of team.execs ?? []) {
            if (execMap.has(exec.name)) continue;

            const created = await payload.create({
                collection: "executives",
                data: {
                    name: exec.name,
                    image: typeof exec.image === "object" ? exec.image?.id : exec.image,
                    description: exec.description,
                    joined: exec.joined,
                },
            });

            execMap.set(exec.name, created.id);
            console.log(`  Created executive: ${exec.name} (id: ${created.id})`);
        }
    }

    // 2. Create an exec-team document linking teams → executives with roles
    const teamsData = oldTeams.map((team) => ({
        teamName: team.teamName,
        teamDescription: team.teamDescription,
        execs: (team.execs ?? []).map((exec) => ({
            exec: execMap.get(exec.name)!,
            role: exec.role,
        })),
    }));

    // Default the year to the current year — adjust if your old data is from a different year
    const currentYear = new Date().getFullYear().toString();

    const execTeam = await payload.create({
        collection: "exec-teams",
        data: {
            year: currentYear,

            teams: teamsData,
        },
    });

    console.log(`  Created exec team: ${currentYear} (id: ${execTeam.id})`);

    console.log(`\nMigration complete: ${execMap.size} executive(s), 1 exec team.`);
    process.exit(0);
}

// Types matching the old inline global structure
type OldExec = {
    name: string;
    role: string;
    image?: { id: number; url?: string } | number | null;
    description: string;
    joined: string;
};

type OldTeam = {
    teamName: string;
    teamDescription: string;
    execs?: OldExec[];
};

migrate().catch((err) => {
    console.error("Migration failed:", err);
    process.exit(1);
});
