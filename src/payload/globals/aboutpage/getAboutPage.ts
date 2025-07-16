"use server";

import { CmsFetchError, CmsParseError } from "@/utils/errors/CmsErrors";
import { getPayload } from "@/utils/payload";
import { parseAboutPage } from "./parseAboutPage";

export const getAboutPage = async () => {
    const payload = await getPayload();

    const AboutPage = await payload.findGlobal({
        slug: "about-page",
    });
    if (!AboutPage) {
        throw new CmsFetchError("Failed to fetch About Page data from Payload CMS.");
    }

    const parsedAboutPage = parseAboutPage(AboutPage);
    if (!parsedAboutPage) {
        throw new CmsParseError("Failed to parse About Page data from Payload CMS.");
    }

    return parsedAboutPage;
};
