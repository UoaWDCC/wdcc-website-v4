import { Event } from "@/types/models";
import { ParsePayloadEvent } from "@/types/parser/ParsePayloadEvent";

import { getAllEvents } from "@/actions/getAllEvents";
import Header from "@/components/layout/pageheaders/Header";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

import EventsSection from "../_components/EventsSection";
import { eventsData } from "../_data/events.data";

const eventsGridData = eventsData.eventsGrid;

export default async function EventsPage() {
    let events = (await getAllEvents()).map(ParsePayloadEvent) as Event[];
    if (events.length === 0) {
        events = eventsGridData.events;
    }

    return (
        <StandardPageLayout>
            <Header
                variant={{ style: "secondary", color: "green" }}
                title="All events"
                backlink={{ label: "events", href: "/events" }}
            />
            <EventsSection categories={eventsGridData.categories} events={events} displayAll />
        </StandardPageLayout>
    );
}
