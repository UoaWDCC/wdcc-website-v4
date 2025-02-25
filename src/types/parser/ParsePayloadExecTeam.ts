import { ExecsPage as CMSEventPage, Media } from "@/payload-types";

import { ExecPage } from "../pages";

export const ParsePayloadExecTeam = (CmsEventPage: CMSEventPage): ExecPage | undefined => {
    if (!CmsEventPage) {
        return undefined;
    }
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
                            image: (exec.image as Media)?.url as string,
                            description: exec.description,
                            joined: exec.joined,
                            id: exec.id,
                        }))
                      : [],
              }))
            : [],
    };
};
