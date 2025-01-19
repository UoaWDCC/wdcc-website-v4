import RouteDisplay from "@/components/debug/RouteDisplay";
import Header from "@/components/layout/pageheaders/Header";
import ProjectHeader from "@/components/layout/pageheaders/ProjectHeader";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

import IndividualProject from "./_component/IndividualProject";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    return (
        <StandardPageLayout>
            <RouteDisplay slug={slug} />
            <ProjectHeader backlink={{ label: "projects", href: "/projects" }} title={slug} />
            <IndividualProject />
        </StandardPageLayout>
    );
}
