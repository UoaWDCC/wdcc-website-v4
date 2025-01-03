import StandardPageLayout from "@/components/StandardPageLayout";

import EventsRoadmap from "./_components/EventsRoadmap";
import UpcomingEventsSection from "./_components/UpcomingEventsSection";
import { eventsData } from "./_data/events.data";
import Header from "@/components/layout/Headers/Header";

export default function EventsPage() {
    return (
        <StandardPageLayout>
            <Header variant="primary"
                color="blue"
                title="events"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis condimentum orci et congue. Donec at sagittis sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                primaryButton={{ label: "Upcoming events ⮕", href: "" }}
                secondaryButton={{ label: "View past events", href: "/events/all" }} />
            <EventsRoadmap />
            <UpcomingEventsSection upcomingEvents={eventsData} />
        </StandardPageLayout>
    );
}
