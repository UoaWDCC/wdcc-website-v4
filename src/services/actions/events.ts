"use server";

import { CollectionSlug } from "payload";

import { SLUG } from "@/libs/consts/slug";
import { getPayload } from "@/libs/payload";

export const getAllEvents = async () => {
    const payload = await getPayload();
    const events = await payload.find({
        collection: SLUG.EVENTS as CollectionSlug,
    });

    console.log(events);

    return events.docs;
};
