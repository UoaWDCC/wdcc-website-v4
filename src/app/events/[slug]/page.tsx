import RouteDisplay from "@/components/debug/RouteDisplay";
import EventHeader from "@/components/layout/pageheaders/EventHeader";
import Header from "@/components/layout/pageheaders/Header";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

import IndividualEvent from "./_component/IndividualEvent";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;

    return (
        <StandardPageLayout>
            <RouteDisplay slug={slug} />
            <EventHeader title={slug} backlink={{ label: "events", href: "/events" }} />
            <IndividualEvent />
        </StandardPageLayout>
    );
}
