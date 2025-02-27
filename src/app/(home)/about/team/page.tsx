import { ParsePayloadExecTeam } from "@/types/parser/ParsePayloadExecTeam";

import { getExecPage } from "@/actions/Pages/getExecPage";
import InfoPill from "@/components/InfoPill";
import Header from "@/components/layout/pageheaders/Header";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

import ExecTeam from "./_components/ExecTeam";
import { teamData } from "./_data/team.data";

export const revalidate = 60;

export default async function TeamPage() {
    let ExecPage = ParsePayloadExecTeam(await getExecPage());
    //if can't find CMS page use hardcoded data
    if (!ExecPage) {
        ExecPage = teamData;
    }
    return (
        <StandardPageLayout>
            <Header
                variant={{ style: "secondary", color: "blue" }}
                title="meet the team"
                backlink={{ label: "About WDCC", href: "/about" }}
            />
            <div className="flex w-full max-w-[1100px] flex-col items-center gap-24 py-20">
                <InfoPill text={teamData.info} />
                {ExecPage.teams.map((team, index) => (
                    <ExecTeam title={team.title} key={index} description={team.description} execs={team.execs ?? []} />
                ))}
            </div>
        </StandardPageLayout>
    );
}
