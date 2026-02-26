import PageHeader from "@/components/layout/pageheaders/PageHeader";
import StandardPageLayout from "@/components/layout/pagelayouts/StandardPageLayout";
import { getExecPage } from "@/payload/globals/execspage/getExecPage";
import InfoPill from "../_components/InfoPill";
import ExecYearSwitcher from "./_components/ExecYearSwitcher";

export default async function TeamPage() {
    const execPage = await getExecPage();

    return (
        <StandardPageLayout>
            <PageHeader
                variant={{ style: "secondary", color: "blue" }}
                title="Meet the team"
                backlink={{ label: "About WDCC", href: "/about" }}
            />
            <div className="flex w-full max-w-[1100px] flex-col items-center gap-24 py-20">
                <InfoPill text={execPage.data.info} />
                <ExecYearSwitcher
                    years={execPage.yearOptions}
                    initialTeams={execPage.data.teams}
                    initialYearSlug={execPage.yearSlug}
                />
            </div>
        </StandardPageLayout>
    );
}