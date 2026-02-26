"use server";

import { SLUG } from "@/utils/enums/slug";
import { getPayload } from "@/utils/payload";

export async function getExecYear(slug: string) {
    const payload = await getPayload();

    const execYears = await payload.find({
        collection: SLUG.EXEC_TEAMS,
        where: {
            slug: { equals: slug },
        },
        limit: 1,
    });

    return execYears.docs[0];
}
