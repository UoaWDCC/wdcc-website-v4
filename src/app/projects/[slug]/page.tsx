import RouteDisplay from "@/components/debug/RouteDisplay";
import Header from "@/components/layout/pageheaders/Header";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

import IndividualProject from "./_component/IndividualProject";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    return (
        <StandardPageLayout>
            <RouteDisplay slug={slug} />
            <Header
                variant={{ style: "tetriary", color: "blue" }}
                backlink={{ label: "events", href: "/events" }}
                title={slug}
            />
            <IndividualProject />
        </StandardPageLayout>
    );
}
