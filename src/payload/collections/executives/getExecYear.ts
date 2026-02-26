"use server";

import { SLUG } from "@/utils/enums/slug";
import { CmsFetchError } from "@/utils/errors/CmsErrors";
import { getPayload } from "@/utils/payload";

/**
 * Fetches a single exec team document by slug, with fully populated
 * executive relationships and their media images.
 */
export async function getExecTeamBySlug(slug: string) {
    const payload = await getPayload();

    const execTeams = await payload.find({
        collection: SLUG.EXEC_TEAMS,
        where: {
            slug: { equals: slug },
        },
        depth: 2,
        limit: 1,
    });

    if (!execTeams.docs[0]) {
        throw new CmsFetchError(`Exec team with slug "${slug}" not found.`);
    }

    return execTeams.docs[0];
}
