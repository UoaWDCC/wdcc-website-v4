"use server";

import { CollectionSlug } from "payload";

import { SLUG } from "@/libs/enums/slug";
import { getPayload } from "@/libs/payload";
import { Event } from "@/payload-types";

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
