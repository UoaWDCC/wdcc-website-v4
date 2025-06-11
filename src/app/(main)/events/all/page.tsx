import StandardPageLayout from "@/components/layout/StandardPageLayout";
import Header from "@/components/layout/pageheaders/Header";
import { getAllEvents } from "@/payload/collections/events/getAllEvents";
import { parseEvent } from "@/payload/collections/events/parseEvent";
import { Event } from "@/types/models/Event";
import EventsSection from "../_components/EventsSection";
import { eventsData } from "../_data/events.data";

const eventsGridData = eventsData.eventsGrid;

export default async function EventsPage() {
    let events = (await getAllEvents()).map(parseEvent) as Event[];
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
