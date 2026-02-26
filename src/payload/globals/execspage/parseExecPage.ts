import { ExecsPage } from "@/payload/payload-types";

/**
 * Parses the ExecsPage global into page-level metadata.
 * Team/exec data is now fetched separately from the ExecTeam collection.
 */
export function parseExecPage(cmsExecPage: ExecsPage) {
    return {
        title: cmsExecPage.title,
        info: cmsExecPage.description,
        defaultYearSlug: cmsExecPage.defaultYearSlug,
    };
}
