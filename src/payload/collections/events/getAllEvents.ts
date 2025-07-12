"use server";

import { SLUG } from "@/utils/enums/slug";
import { getPayload } from "@/utils/payload";


// return all events
export const getAllEvents = async () => {
    const payload = await getPayload();
    const events = await payload.find({
        collection: SLUG.EVENT,
        pagination: false,
    });

    return events.docs;
};