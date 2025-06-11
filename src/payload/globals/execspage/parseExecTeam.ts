import { ExecsPage as CMSEventPage, Media } from "@/payload/payload-types";
import { ExecPage } from "../../../types/pages/ExecPage";

export const parseExecTeam = (CmsEventPage: CMSEventPage): ExecPage => {
    //hmmm
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
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            image: (exec.image as Media).url!,
                            description: exec.description,
                            joined: exec.joined,
                            id: exec.id,
                        }))
                      : [],
              }))
            : [],
    };
};
