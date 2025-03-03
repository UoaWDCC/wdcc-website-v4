import { Event } from "@/types/models";
import { ParsePayloadEvent } from "@/types/parser/ParsePayloadEvent";

import { getAllEvents } from "@/actions/getAllEvents";
import { EmptyListPlaceholder } from "@/components/EmptyListPlaceholder";
//import Arrow from "@/assets/svg/Arrow";
import Header from "@/components/layout/pageheaders/Header";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

import EventCard from "../_components/EventCard";
import { eventsData } from "../_data/events.data";

const hardcodedEvents = eventsData.eventsGrid.events;

export default async function EventsPage() {
    let events = (await getAllEvents()).map(ParsePayloadEvent) as Event[];
    if (events.length === 0) {
        events = hardcodedEvents;
    }

    return (
        <StandardPageLayout>
            <Header
                variant={{ style: "secondary", color: "green" }}
                title="All past events"
                backlink={{ label: "events", href: "/events" }}
            />
            <div className="my-24 flex w-full flex-col">
                {events.length ? (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {events.map((event, index) => (
                            <EventCard event={event} key={index} />
                        ))}
                    </div>
                ) : (
                    <EmptyListPlaceholder>No events found</EmptyListPlaceholder>
                )}
            </div>
        </StandardPageLayout>
    );
}
