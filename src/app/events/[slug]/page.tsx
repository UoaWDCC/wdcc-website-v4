import RouteDisplay from "@/components/debug/RouteDisplay";
import Header from "@/components/layout/pageheaders/Header";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

import IndividualEvent from "./_component/IndividualEvent";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;

    return (
        <StandardPageLayout>
            <RouteDisplay slug={slug} />
            <Header
                variant={{ style: "tetriary", color: "green" }}
                backlink={{ label: "events", href: "/events" }}
                title={slug}
            />
            <IndividualEvent />
        </StandardPageLayout>
    );
}
