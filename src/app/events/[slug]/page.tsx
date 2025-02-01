import RouteDisplay from "@/components/debug/RouteDisplay";
import EventHeader from "@/components/layout/pageheaders/EventHeader";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

import IndividualEvent from "./_component/IndividualEvent";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const slugStr = decodeURIComponent(slug);

    return (
        <StandardPageLayout>
            <RouteDisplay slug={slug} />
            <EventHeader title={slugStr} backlink={{ label: "events", href: "/events" }} />
            <IndividualEvent title={slugStr} />
        </StandardPageLayout>
    );
}
