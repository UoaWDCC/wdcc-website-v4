"use server";

import { SLUG } from "@/libs/enums/slug";
import { getPayload } from "@/libs/payload";
import { Event } from "@/payload-types";

// return all events
export const getAllEvents = async () => {
    const payload = await getPayload();
    const events = await payload.find({
        collection: SLUG.EVENTS,
        pagination: false,
    });

    return events.docs as Event[];
};
