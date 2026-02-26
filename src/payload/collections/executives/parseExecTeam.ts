import { Exec } from "@/types/models/Exec";
import { ExecTeam as CmsExecTeam, Executive, Media } from "@/payload/payload-types";

type ParsedTeam = {
    title: string;
    description: string;
    execs: Exec[];
};

/**
 * Parses a populated ExecTeam CMS document into frontend-friendly team data.
 * Expects depth >= 2 so that exec relationships and their media are populated.
 */
export function parseExecTeam(cmsExecTeam: CmsExecTeam): ParsedTeam[] {
    return cmsExecTeam.teams.map((team) => ({
        title: team.teamName,
        description: team.teamDescription,
        execs: team.execs.map((entry) => {
            const exec = entry.exec as Executive;
            const image = exec.image as Media | null | undefined;

            return {
                name: exec.name,
                role: entry.role,
                image: image?.url ?? undefined,
                description: exec.description,
                joined: exec.joined,
                id: entry.id,
            };
        }),
    }));
}
