"use server";

import { CmsFetchError, CmsParseError } from "@/utils/errors/CmsErrors";
import { getPayload } from "@/utils/payload";
import { parseExecPage } from "./parseExecPage";

export async function getExecPage() {
    const payload = await getPayload();

    const execPage = await payload.findGlobal({
        slug: "execs-page",
    });
    if (!execPage) {
        throw new CmsFetchError("Failed to fetch Exec Page data from Payload CMS.");
    }

    const parsedExecPage = parseExecPage(execPage);
    if (!parsedExecPage) {
        throw new CmsParseError("Failed to parse Exec Page data from Payload CMS.");
    }

    return parsedExecPage;
}
