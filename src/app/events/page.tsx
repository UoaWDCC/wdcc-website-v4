import StandardPageLayout from "@/components/common/StandardPageLayout";

import EventsPageHeader from "./_components/EventsPageHeader";
import EventsRoadmap from "./_components/EventsRoadmap";
import PastEventsSection from "./_components/PastEventsSection";
import { pastEventsData } from "./_data/pastEvents.data";

export default function EventsPage() {
    return (
        <StandardPageLayout>
            <EventsPageHeader />
            <EventsRoadmap />
            <PastEventsSection pastEvents={pastEventsData} />
        </StandardPageLayout>
    );
}