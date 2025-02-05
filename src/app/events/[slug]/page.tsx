import { notFound } from "next/navigation";

import RouteDisplay from "@/components/debug/RouteDisplay";
import EventHeader from "@/components/layout/pageheaders/EventHeader";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

import IndividualEvent from "./_component/IndividualEvent";
import { eventsData } from "../_data/events_data";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const event = eventsData.find((e) => e.slug === slug);

    if (!event) {
        notFound();
    }

    return (
        <StandardPageLayout>
            <RouteDisplay slug={slug} />
            <EventHeader title={event.title} backlink={{ label: "events", href: "/events" }} />
            <IndividualEvent event={event} />
        </StandardPageLayout>
    );
}
