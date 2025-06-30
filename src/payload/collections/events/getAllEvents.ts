"use server";

import { Event } from "@/payload/payload-types";
import { SLUG } from "@/utils/enums/slug";
import { getPayload } from "@/utils/payload";

// return all events
export const getAllEvents = async () => {
    let events: Event[];
    if (process.env.MOCK_DATA === "true") {
        const { mockEventsData } = await import("./mockEventsData");
        events = mockEventsData.docs;
    } else {
        const payload = await getPayload();
        events = (
            await payload.find({
                collection: SLUG.EVENTS,
                pagination: false,
            })
        ).docs;
    }
    return events;
};
