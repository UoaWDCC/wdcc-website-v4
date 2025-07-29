"use server";

import { CollectionSlug } from "payload";
import { getPayload } from "@/payload/mock";
import { Event } from "@/payload/payload-types";
import { SLUG } from "@/utils/enums/slug";

// return Event
export const getEvent = async (slug: string) => {
    const payload = await getPayload();
    const events = await payload.find({
        collection: SLUG.EVENTS as CollectionSlug,
        where: {
            slug: { equals: slug },
        },
        limit: 1,
    });

    return events.docs[0] as Event;
};
