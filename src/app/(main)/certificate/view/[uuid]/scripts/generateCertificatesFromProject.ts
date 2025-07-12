import "dotenv/config";
import { SLUG } from "@/utils/enums/slug";
import { getPayload } from "@/utils/payload";

// npx tsx "src/app/(main)/certificate/view/[uuid]/scripts/generateCertificatesFromProject.ts"
async function seed() {
    console.log("Loading payload...");

    const payload = await getPayload();

    console.log("fetching all projects...");

    const projects = await payload.find({
        collection: SLUG.PROJECTS,
        pagination: false,
    });

    console.log(`Found ${projects.docs.length} projects:`);

    type Person = {
        name: string;
        role: string;
        projectId: number;
    };

    const members: Person[] = [];

    // 🤮 ew
    projects.docs.forEach((project) => {
        members.push({
            name: project.techlead.name,
            role: "Technical lead",
            projectId: project.id,
        } as Person);
        members.push({
            name: project.manager.name,
            role: "Project manager",
            projectId: project.id,
        } as Person);
        project.members?.forEach((member) => {
            members.push({
                name: member.name,
                role: member.role,
                projectId: project.id,
            } as Person);
        });
    });

    console.log(members);

    // Use Promise.all to properly handle async operations
    await Promise.all(
        members.map(async (member) => {
            try {
                await payload.create({
                    collection: SLUG.CERTIFICATE,
                    data: {
                        name: member.name,
                        role: member.role,
                        project: member.projectId,
                        style: "default-2025",
                    },
                });
                console.log(`Created certificate for ${member.name}`);
            } catch (error) {
                console.error(`Failed to create certificate for ${member.name}:`, error);
            }
        })
    );
}

// Wrap the top-level await in an async function
async function main() {
    await seed().then(() => {
        console.log("\nDone");
        process.exit(0);
    });
}

main().catch((error: unknown) => {
    console.error("Error:", error);
    process.exit(1);
});
