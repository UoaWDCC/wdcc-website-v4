"use server";

import { CmsFetchError, CmsParseError } from "@/utils/errors/CmsErrors";
import { getPayload } from "@/utils/payload";
import { parseAboutPage } from "./parseAboutPage";

export async function getAboutPage() {
    const payload = await getPayload();

    const aboutPage = await payload.findGlobal({
        slug: "about-page",
    });
    if (!aboutPage) {
        throw new CmsFetchError("Failed to fetch About Page data from Payload CMS.");
    }

    try {
        return parseAboutPage(aboutPage);
    } catch {
        throw new CmsParseError("Failed to parse About Page data from Payload CMS.");
    }
}
