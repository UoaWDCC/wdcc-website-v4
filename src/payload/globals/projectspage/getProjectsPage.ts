"use server";

import { CmsFetchError, CmsParseError } from "@/utils/errors/CmsErrors";
import { getPayload } from "@/utils/payload";
import { parseProjectsPage } from "./parseProjectsPage";

export async function getProjectsPage() {
    const payload = await getPayload();

    const projectsPage = await payload.findGlobal({
        slug: "projects-page",
    });
    if (!projectsPage) {
        throw new CmsFetchError("Failed to fetch Projects Page data from Payload CMS.");
    }

    const parsedProjectsPage = parseProjectsPage(projectsPage);
    if (!parsedProjectsPage) {
        throw new CmsParseError("Failed to parse Projects Page data from Payload CMS.");
    }

    return parsedProjectsPage;
}
