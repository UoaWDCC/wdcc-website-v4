"use server";

import { getPayload } from "@/payload/mock";
import { SLUG } from "@/utils/enums/slug";

// return all events
export const getAllEvents = async () => {
    const payload = await getPayload();
    const events = await payload.find({
        collection: SLUG.EVENTS,
        pagination: false,
    });

    return events.docs;
};
