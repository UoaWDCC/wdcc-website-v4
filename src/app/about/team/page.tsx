import Header from "@/components/layout/pageheaders/Header";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

import ExecTeam from "./_components/ExecTeam";
import InfoPill from "./_components/InfoPill";
import { teamData } from "./_data/team.data";

export default function TeamPage() {
    const tech = teamData.techTeam;
    const edu = teamData.eduTeam;

    return (
        <StandardPageLayout>
            <Header
                variant={{ style: "secondary", color: "blue" }}
                title="meet the team"
                backlink={{ label: "About WDCC", href: "/about" }}
            />
            <div className="flex w-full max-w-[1100px] flex-col gap-24 py-20">
                <InfoPill text={teamData.info} />
                <ExecTeam title={tech.title} description={tech.description} execs={tech.execs} />
                <ExecTeam title={edu.title} description={edu.description} execs={edu.execs} />
            </div>
        </StandardPageLayout>
    );
}
