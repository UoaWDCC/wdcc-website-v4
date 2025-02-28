import { EmptyListPlaceholder } from "@/components/EmptyListPlaceholder";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

import EventCard from "../_components/EventCard";
import { eventsData } from "../_data/events.data";

const events = eventsData.eventsGrid.events;

const page = () => {
    return (
        <StandardPageLayout>
            <div className="my-24 flex w-full flex-col">
                {events.length ? (
                    <div className="grid gap-6 lg:grid-cols-2">
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
