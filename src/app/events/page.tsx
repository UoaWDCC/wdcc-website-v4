import StandardPageLayout from "@/components/common/StandardPageLayout";

import EventsPageHeader from "./components/EventsPageHeader";
import EventsRoadmap from "./components/EventsRoadmap";
import PastEvents from "./components/PastEvents";

export default function EventsPage() {
    return (
        <StandardPageLayout>
            <EventsPageHeader />
            <EventsRoadmap />
            <PastEvents />
        </StandardPageLayout>
    );
}
