"use server";

import { Event } from "@/payload/payload-types";
import { SLUG } from "@/utils/enums/slug";
import { getPayload } from "@/utils/payload";
import { mockEventsData } from "./mockEventsData";

// return Event
export const getEvent = async (slug: string) => {
    let event: Event | undefined;
    if (process.env.MOCK_DATA === "true") {
        event = mockEventsData.docs.find((e) => e.slug === slug);
    } else {
        const payload = await getPayload();
        const events = await payload.find({
            collection: SLUG.EVENTS,
            where: {
                slug: { equals: slug },
            },
            limit: 1,
        });
        event = events.docs.at(0);
    }
    return event;
};