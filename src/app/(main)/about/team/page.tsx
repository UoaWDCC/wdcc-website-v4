import Header from "@/components/layout/pageheaders/Header";
import StandardPageLayout from "@/components/layout/pagelayouts/StandardPageLayout";
import InfoPill from "@/components/old/InfoPill";
import { getExecPage } from "@/payload/globals/execspage/getExecPage";
import { parseExecTeam } from "@/payload/globals/execspage/parseExecTeam";
import ExecTeam from "./_components/ExecTeam";

export default async function TeamPage() {
    const ExecPage = parseExecTeam(await getExecPage());

    return (
        <StandardPageLayout>
            <Header
                variant={{ style: "secondary", color: "blue" }}
                title="Meet the team"
                backlink={{ label: "About WDCC", href: "/about" }}
            />
            <div className="flex w-full max-w-[1100px] flex-col items-center gap-24 py-20">
                <InfoPill text={ExecPage.info} />
                {ExecPage.teams.map((team, index) => (
                    <ExecTeam title={team.title} key={index} description={team.description} execs={team.execs ?? []} />
                ))}
            </div>
        </StandardPageLayout>
    );
}
