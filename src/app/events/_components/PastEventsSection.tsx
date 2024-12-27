import SectionWithHeader from "@/components/SectionWithHeader";

import EventCard from "./EventCard";
import { EventCardType } from "@/types/models";

interface PastEventsProps {
    pastEvents: EventCardType[];
}

export default function PastEventsSection({ pastEvents }: PastEventsProps) {
    return (
        <SectionWithHeader headerText="Past Events">
            <div className="mt-5 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {pastEvents.map((event, i) => (
                    <EventCard key={i} event={event} />
                ))}
            </div>
        </SectionWithHeader>
    );
}
