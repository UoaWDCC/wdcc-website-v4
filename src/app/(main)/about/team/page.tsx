import PageHeader from "@/components/layout/pageheaders/PageHeader";
import StandardPageLayout from "@/components/layout/pagelayouts/StandardPageLayout";
import { getExecPage } from "@/payload/globals/execspage/getExecPage";
import InfoPill from "../_components/InfoPill";
import TeamYearSwitcher from "./_components/TeamYearSwitcher";

export default async function TeamPage() {
    // Source: Payload global "execs-page" via getExecPage().
    const execData = await getExecPage();

    return (
        <StandardPageLayout>
            <PageHeader
                variant={{ style: "secondary", color: "blue" }}
                title="Meet the team"
                backlink={{ label: "About WDCC", href: "/about" }}
            />
            <div className="flex w-full max-w-[1100px] flex-col items-center gap-24 py-20">
                <InfoPill text={execData.info} />
                <TeamYearSwitcher data={execData.years} />
            </div>
        </StandardPageLayout>
    );
}
