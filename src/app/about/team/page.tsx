import Header from "@/components/layout/Headers/Header";
import PageBody from "@/components/PageBody";
import StandardPageLayout from "@/components/StandardPageLayout";

import ExecList from "./_components/ExecList";
import InfoPill from "./_components/InfoPill";
import { teamData } from "./_data/team.data";
import { techExecs } from "./_data/techExecs.data";

export default function TeamPage() {
    // const tech = teamData.techTeam;

    return (
        <StandardPageLayout>
            <Header
                variant="secondary"
                color="blue"
                title="meet the team"
                backlink={{ label: "About WDCC", href: "/about" }}
            />
            <PageBody
                outer="flex w-full items-center justify-center py-20"
                inner="flex w-[80%] max-w-[1100px] flex-col gap-24"
            >
                <InfoPill text={teamData.info} />
                <ExecList execs={techExecs} />
            </PageBody>
        </StandardPageLayout>
    );
}
