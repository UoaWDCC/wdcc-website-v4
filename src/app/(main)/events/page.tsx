import Arrow from "@/assets/svg/Arrow";
import PageHeader from "@/components/layout/pageheaders/PageHeader";
import StandardPageLayout from "@/components/layout/pagelayouts/StandardPageLayout";
import EventsRoadmap from "./_components/EventsRoadmap";
import EventsSection from "./_components/EventsSection";
import { eventsData } from "./_data/events.data";

export default function EventsPage() {
    const headerData = eventsData.header;
    const roadmapData = eventsData.roadmap;
    const eventsGridData = eventsData.eventsGrid;

    return (
        <StandardPageLayout>
            <PageHeader
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
                secondaryButton={{ label: "All past events", href: "/events/all" }}
            />
            <EventsRoadmap title={roadmapData.title} image={roadmapData.image} />
            <EventsSection
                title={eventsGridData.title}
                categories={eventsGridData.categories}
                events={eventsGridData.events}
            />
        </StandardPageLayout>
    );
}
