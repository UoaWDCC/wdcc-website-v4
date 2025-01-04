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
                description="From educational workshops to social mixers, hackathons to code competitions, WDCC's regular events help students develop all kinds of valuable skills - and make friends along the way!"
                primaryButton={{ label: "Current events ↓", href: "#upcomingEvents" }}
                secondaryButton={{ label: "Past events", href: "/events/all" }} />
            <EventsRoadmap />
            <UpcomingEventsSection upcomingEvents={eventsData} />
        </StandardPageLayout>
    );
}
