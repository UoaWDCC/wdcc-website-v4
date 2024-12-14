import SectionWithHeader from "@/components/common/SectionWithHeader";

import EventCard from "./EventCard";

const tempDummyEventText = ["Event 1", "Event 2", "Event 3", "Event 4", "Event 5", "Event 6", "Event 7", "Event 8"];

export default function PastEvents() {
    return (
        <SectionWithHeader headerText="Past Events">
            <div className="mt-5 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {tempDummyEventText.map((tempText, i) => (
                    <EventCard key={i} tempText={tempText} />
                ))}
            </div>
        </SectionWithHeader>
    );
}
