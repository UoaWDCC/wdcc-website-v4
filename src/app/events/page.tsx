import StandardPageLayout from "@/components/common/StandardPageLayout";

import EventsPageHeader from "./_components/EventsPageHeader";
import EventsRoadmap from "./_components/EventsRoadmap";
import PastEvents from "./_components/PastEvents";

export default function EventsPage() {
    return (
        <StandardPageLayout>
            <EventsPageHeader />
            <EventsRoadmap />
            <PastEvents />
        </StandardPageLayout>
    );
}
