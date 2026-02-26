"use server";

import { SLUG } from "@/utils/enums/slug";
import { CmsFetchError } from "@/utils/errors/CmsErrors";
import { getPayload } from "@/utils/payload";

/**
 * Fetches a single exec team document by year, with fully populated
 * executive relationships and their media images.
 */
export async function getExecTeamByYear(year: string) {
    const payload = await getPayload();

    const execTeams = await payload.find({
        collection: SLUG.EXEC_TEAMS,
        where: {
            year: { equals: year },
        },
        depth: 2,
        limit: 1,
    });

    if (!execTeams.docs[0]) {
        throw new CmsFetchError(`Exec team for year "${year}" not found.`);
    }

    return execTeams.docs[0];
}
