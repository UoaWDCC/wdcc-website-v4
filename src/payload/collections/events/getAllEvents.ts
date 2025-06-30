"use server";

import { Event } from "@/payload/payload-types";
import { SLUG } from "@/utils/enums/slug";
import { getPayload } from "@/utils/payload";
import { mockEventsData } from "./mockEventsData";

// return all events
export const getAllEvents = async () => {
    let events: Event[];
    if (process.env.MOCK_DATA === "true") {
        events = mockEventsData.docs;
    } else {
        const payload = await getPayload();
        const result = await payload.find({
            collection: SLUG.EVENTS,
            pagination: false,
        });
        events = result.docs;
    }
    return events;
};