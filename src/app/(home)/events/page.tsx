import Arrow from "@/assets/svg/Arrow";
import Header from "@/components/layout/pageheaders/Header";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

import EventsRoadmap from "./_components/EventsRoadmap";
import RecentEventsSection from "./_components/RecentEventsSection";
import { eventsData } from "./_data/events.data";

export default function EventsPage() {
    const headerData = eventsData.header;
    const roadmapData = eventsData.roadmap;
    const eventsGridData = eventsData.eventsGrid;

    return (
        <StandardPageLayout>
            <Header
                variant={{ style: "primary", color: "green" }}
                title={headerData.title}
                description={headerData.description}
                primaryButton={{
                    label: (
                        <>
                            Recent events <Arrow className="rotate-90" />
                        </>
                    ),
                    href: "/events#recent",
                }}
                secondaryButton={{ label: "All events", href: "/events/all" }}
            />
            <EventsRoadmap title={roadmapData.title} image={roadmapData.image} />
            <RecentEventsSection
                title={eventsGridData.title}
                categories={eventsGridData.categories}
                events={eventsGridData.events}
            />
        </StandardPageLayout>
    );
}
