"use server";

import { Event } from "@/payload/payload-types";
import { SLUG } from "@/utils/enums/slug";
import { getPayload } from "@/utils/payload";

// return Event
export const getEvent = async (slug: string) => {
    let event: Event;
    if (process.env.MOCK_DATA === "true") {
        const { mockEventsData } = await import("./mockEventsData");
        event = mockEventsData.docs[0];
    } else {
        const payload = await getPayload();
        const events = await payload.find({
            collection: SLUG.EVENTS,
            where: {
                slug: { equals: slug },
            },
            limit: 1,
        });
        event = events.docs[0];
    }
    return event;
};
