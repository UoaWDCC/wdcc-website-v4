import Header from "@/components/layout/Headers/Header";
import NestedDiv from "@/components/NestedDiv";
import StandardPageLayout from "@/components/StandardPageLayout";

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
            <NestedDiv
                outer="flex w-full items-center justify-center py-20"
                inner="flex w-[80%] max-w-[1100px] flex-col gap-12"
            >
                <InfoPill text={teamData.info} />

                {/* TODO: fix responsiveness on mobile */}
                <ExecTeam title={tech.title} description={tech.description} execs={tech.execs} />
                <ExecTeam title={edu.title} description={edu.description} execs={edu.execs} />
            </NestedDiv>
        </StandardPageLayout>
    );
}
