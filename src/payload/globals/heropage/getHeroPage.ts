"use server";

import { CmsFetchError } from "@/utils/errors/CmsErrors";
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

    return parseHeroPage(heroPage);
}
