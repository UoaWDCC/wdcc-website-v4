import PageHeader from "@/components/layout/pageheaders/PageHeader";
import StandardPageLayout from "@/components/layout/pagelayouts/StandardPageLayout";
import { getAllExecTeamYears } from "@/payload/collections/executives/getAllExecTeamYears";
import { getExecPage } from "@/payload/globals/execspage/getExecPage";
import InfoPill from "../../_components/InfoPill";
import ExecTeamsSection from "../_components/ExecTeamsSection";

export async function generateStaticParams() {
    const years = await getAllExecTeamYears();
    return years.map((entry) => ({ year: entry.slug }));
}

export default async function TeamPage({ params }: { params: Promise<{ year: string }> }) {
    const { year } = await params;
    const execData = await getExecPage(year);

    return (
        <StandardPageLayout>
            <PageHeader
                variant={{ style: "secondary", color: "blue" }}
                title={execData.title}
                backlink={{ label: "About WDCC", href: "/about" }}
            />
            <div className="flex w-full max-w-275 flex-col items-center gap-24 py-20">
                <InfoPill text={execData.info} />
                <ExecTeamsSection
                    selectedYearSlug={year}
                    availableYears={execData.availableYears}
                    teams={execData.teams}
                />
            </div>
        </StandardPageLayout>
    );
}
