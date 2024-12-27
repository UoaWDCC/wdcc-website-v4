import StandardPageLayout from "@/components/StandardPageLayout";

import EventsPageHeader from "./_components/EventsPageHeader";
import EventsRoadmap from "./_components/EventsRoadmap";
import UpcomingEventsSection from "./_components/UpcomingEventsSection";
import { eventsData } from "./_data/events.data";

export default function EventsPage() {
    return (
        <StandardPageLayout>
            <EventsPageHeader />
            <EventsRoadmap />
            <UpcomingEventsSection upcomingEvents={eventsData} />
        </StandardPageLayout>
    );
}
