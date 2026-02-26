"use server";

import { ExecPage } from "@/types/pages/ExecPage";
import { getAllExecTeamYears } from "@/payload/collections/executives/getAllExecTeamYears";
import { getExecTeamBySlug } from "@/payload/collections/executives/getExecYear";
import { parseExecTeam } from "@/payload/collections/executives/parseExecTeam";
import { CmsFetchError, CmsParseError } from "@/utils/errors/CmsErrors";
import { getPayload } from "@/utils/payload";
import { parseExecPage } from "./parseExecPage";

/**
 * Fetches the full exec page data: page metadata from the global,
 * available years from the exec-teams collection, and the selected year's teams.
 */
export async function getExecPage(yearSlug?: string): Promise<ExecPage> {
    const payload = await getPayload();

    const execPage = await payload.findGlobal({
        slug: "execs-page",
    });
    if (!execPage) {
        throw new CmsFetchError("Failed to fetch Exec Page data from Payload CMS.");
    }

    try {
        const pageMeta = parseExecPage(execPage);
        const availableYears = await getAllExecTeamYears();
        const selectedSlug = yearSlug ?? pageMeta.defaultYearSlug;
        const execTeam = await getExecTeamBySlug(selectedSlug);
        const teams = parseExecTeam(execTeam);

        return {
            title: pageMeta.title,
            info: pageMeta.info,
            defaultYearSlug: pageMeta.defaultYearSlug,
            availableYears,
            teams,
        };
    } catch (error) {
        if (error instanceof CmsFetchError) throw error;
        throw new CmsParseError("Failed to parse Exec Page data from Payload CMS.");
    }
}
