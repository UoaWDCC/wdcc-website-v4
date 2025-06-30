import { notFound } from "next/navigation";
import EventHeader from "@/components/layout/pageheaders/EventHeader";
import StandardPageLayout from "@/components/layout/pagelayouts/StandardPageLayout";
import { getEvent } from "@/payload/collections/events/getEvent";
import { parseEvent } from "@/payload/collections/events/parseEvent";
import IndividualEvent from "./_components/IndividualEvent";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const event = parseEvent(await getEvent(slug));
    if (!event) {
        notFound();
    }

    /*
     * We asked whether event pages should back link to /events or /events/all.
     * Chris suggested we randomise it 50-50.
     * The following code implements said effect.
     */
    // Wtf
    let backlinkRef = "/events";
    let backlinkTitle = "events";
    const backlinkRandomNum = Math.floor(Math.random() * 2) + 1;

    if (backlinkRandomNum > 1) {
        backlinkRef = "/events/all";
        backlinkTitle = "All events";
    }

    return (
        <StandardPageLayout>
            <EventHeader
                when={event.time.toLocaleString()}
                where={event.location}
                title={event.title}
                backlink={{ label: backlinkTitle, href: backlinkRef }}
            />
            <IndividualEvent event={event} />
        </StandardPageLayout>
    );
}
