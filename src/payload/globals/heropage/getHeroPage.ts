"use server";

import { CmsFetchError, CmsParseError } from "@/utils/errors/CmsErrors";
import { getPayload } from "@/utils/payload";
import { parseHeroPage } from "./parseHeroPage";

export async function getHeroPage() {
    const payload = await getPayload();

    const heroPage = await payload.findGlobal({
        slug: "hero-page",
    });
    if (!heroPage) {
        throw new CmsFetchError("Failed to fetch Hero Page data from Payload CMS.");
    }

    const parsedHeroPage = parseHeroPage(heroPage);
    if (!parsedHeroPage) {
        throw new CmsParseError("Failed to parse Hero Page data from Payload CMS.");
    }

    return parsedHeroPage;
}
