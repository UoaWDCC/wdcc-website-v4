import { EmptyListPlaceholder } from "@/components/EmptyListPlaceholder";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

import EventCard from "../_components/EventCard";
import { eventsData } from "../_data/events.data";
import Arrow from "@/assets/svg/Arrow";
import Header from "@/components/layout/pageheaders/Header";

const events = eventsData.eventsGrid.events;

const page = () => {
    return (
        <StandardPageLayout>
            <Header
                variant={{ style: "secondary", color: "green" }}
                title="All events"
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
};

export default page;
