import { ExecPage } from "@/types/pages/ExecPage";
import { ExecsPage as CMSEventPage, Media } from "@/payload/payload-types";

export function parseExecPage(CmsEventPage: CMSEventPage): ExecPage {
    const years = Array.isArray((CmsEventPage as unknown as { years?: unknown[] }).years)
        ? ((CmsEventPage as unknown as { years: { year: string; teams?: unknown[] }[] }).years ?? [])
              .map((yearGroup) => ({
                  year: yearGroup.year,
                  teams: Array.isArray(yearGroup.teams)
                      ? (yearGroup.teams as { teamName: string; teamDescription: string; execs?: unknown[] }[]).map((team) => ({
                            title: team.teamName,
                            description: team.teamDescription,
                            execs: Array.isArray(team.execs)
                                ? (team.execs as { id?: string | null; name: string; role: string; image?: Media | null; description: string; joined: string }[]).map(
                                      (exec) => ({
                                          name: exec.name,
                                          role: exec.role,
                                          image: (exec.image as Media | null)?.url ?? undefined,
                                          description: exec.description,
                                          joined: exec.joined,
                                          id: exec.id,
                                      }),
                                  )
                                : [],
                        }))
                      : [],
              }))
              .sort((a, b) => Number(b.year) - Number(a.year))
        : [];

    return {
        info: CmsEventPage.description,
        years,
    };
}
