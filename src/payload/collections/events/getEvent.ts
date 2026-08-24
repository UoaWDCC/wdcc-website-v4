"use server";

import { Event } from "@/payload/payload-types";
import { SLUG } from "@/utils/enums/slug";
import { getPayload } from "@/utils/payload";

// return Event, or undefined when no event has that slug
export async function getEvent(slug: string): Promise<Event | undefined> {
    const payload = await getPayload();
    const events = await payload.find({
        collection: SLUG.EVENTS,
        where: {
            slug: { equals: slug },
        },
        limit: 1,
    });

    return events.docs[0];
}
