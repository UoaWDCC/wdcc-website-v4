import { ExecPage } from "@/types/pages/ExecPage";
import { ExecsPage as CMSEventPage, Media } from "@/payload/payload-types";

export function parseExecPage(CmsEventPage: CMSEventPage): ExecPage {
    // hmmm
    return {
        info: CmsEventPage.description,
        teams: Array.isArray(CmsEventPage.teams)
            ? CmsEventPage.teams.map((team) => ({
                  title: team.teamName,
                  description: team.teamDescription,
                  execs: Array.isArray(team.execs)
                      ? team.execs.map((exec) => ({
                            name: exec.name,
                            role: exec.role,
                            // TODO ANTON

                            image: (exec.image as Media).url!,
                            description: exec.description,
                            joined: exec.joined,
                            id: exec.id,
                        }))
                      : [],
              }))
            : [],
    };
}
