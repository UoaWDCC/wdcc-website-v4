"use server";

import { SLUG } from "@/utils/enums/slug";
import { getPayload } from "@/utils/payload";

/**
 * Fetches all exec team year slugs from the exec-teams collection.
 * Returns them sorted by year descending (newest first).
 */
export async function getAllExecTeamYears(): Promise<{ year: string; slug: string }[]> {
    const payload = await getPayload();

    const execTeams = await payload.find({
        collection: SLUG.EXEC_TEAMS,
        depth: 0,
        sort: "-year",
        limit: 100,
    });

    return execTeams.docs.map((doc) => ({
        year: doc.year,
        slug: doc.slug,
    }));
}
