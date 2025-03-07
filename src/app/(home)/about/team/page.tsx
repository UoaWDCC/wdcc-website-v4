import { ParsePayloadExecTeam } from "@/types/parser/ParsePayloadExecTeam";

import { getExecPage } from "@/actions/Pages/getExecPage";
import InfoPill from "@/components/InfoPill";
import Header from "@/components/layout/pageheaders/Header";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

import ExecTeam from "./_components/ExecTeam";

export default async function TeamPage() {
    const ExecPage = ParsePayloadExecTeam(await getExecPage());

    return (
        <StandardPageLayout>
            <Header
                variant={{ style: "secondary", color: "blue" }}
                title="Meet the team"
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
