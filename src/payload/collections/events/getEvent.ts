"use server";

import { SLUG } from "@/utils/enums/slug";
import { getPayload } from "@/utils/payload";

// return Event
export const getEvent = async (slug: string) => {
    const payload = await getPayload();
    const events = await payload.find({
        collection: SLUG.EVENTS,
        where: {
            slug: { equals: slug },
        },
        limit: 1,
    });

    return events.docs[0];
};