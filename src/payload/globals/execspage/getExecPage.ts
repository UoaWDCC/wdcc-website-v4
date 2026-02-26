"use server";

import { CmsFetchError, CmsParseError } from "@/utils/errors/CmsErrors";
import { getPayload } from "@/utils/payload";
import { getExecYear } from "@/payload/collections/executives/getExecYear";
import { parseExecPage } from "./parseExecPage";

export async function getExecPage(yearSlug?: string) {
    const payload = await getPayload();

    const execPage = await payload.findGlobal({
        slug: "execs-page",
    });
    if (!execPage) {
        throw new CmsFetchError("Failed to fetch Exec Page data from Payload CMS.");
    }

    const targetSlug = yearSlug ?? execPage.defaultYearSlug;
    const execYear = targetSlug ? await getExecYear(targetSlug) : null;

    if (!execYear) {
        throw new CmsFetchError("Failed to fetch Exec Year data from Payload CMS.");
    }

    try {
        return {
            data: parseExecPage(execPage, execYear),
            yearSlug: targetSlug,
            yearOptions: execPage.yearOptions ?? [],
        };
    } catch {
        throw new CmsParseError("Failed to parse Exec Page data from Payload CMS.");
    }
}