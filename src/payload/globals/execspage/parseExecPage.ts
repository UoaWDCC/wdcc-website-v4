import { ExecPage } from "@/types/pages/ExecPage";
import { ExecsPage as CmsExecPage, ExecYear, Media } from "@/payload/payload-types";

export function parseExecPage(cmsExecPage: CmsExecPage, execYear: ExecYear): ExecPage {
    const getImageUrl = (image?: Media | number | null) =>
        typeof image === "object" && image !== null ? image.url ?? undefined : undefined;

    return {
        info: cmsExecPage.description,
        teams: Array.isArray(execYear.teams)
            ? execYear.teams.map((team) => ({
                  title: team.teamName,
                  description: team.teamDescription,
                  execs: Array.isArray(team.execs)
                      ? team.execs
                            .map((exec) => {
                                if (!exec || typeof exec === "number") {
                                    return null;
                                }

                                return {
                                    name: exec.name,
                                    role: exec.role,
                                    image: getImageUrl(exec.image as Media | number | null),
                                    description: exec.description,
                                    joined: exec.joined,
                                    id: exec.id,
                                };
                            })
                            .filter((exec): exec is NonNullable<typeof exec> => Boolean(exec))
                      : [],
              }))
            : [],
    };
}
