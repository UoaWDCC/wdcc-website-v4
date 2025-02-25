import { notFound } from "next/navigation";

import { ParsePayloadEvent } from "@/types/parser/ParsePayloadEvent";

import { getEvent } from "@/actions/getEvent";
import RouteDisplay from "@/components/debug/RouteDisplay";
import EventHeader from "@/components/layout/pageheaders/EventHeader";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

import { eventsData } from "../_data/events.data";
import IndividualEvent from "./_component/IndividualEvent";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const events = eventsData.eventsGrid.events;

    const slug = (await params).slug;
    let event = events.find((e) => e.slug === slug);

    if (!event) {
        event = ParsePayloadEvent(await getEvent(slug));
    }
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
