"use server";

import { HeroPage } from "@/payload/payload-types";
import { getPayload } from "@/utils/payload";

export const getHeroPage = async () => {
    let heroPage: HeroPage;
    if (process.env.MOCK_DATA === "true") {
        const { mockHeroPageData } = await import("./mockHeroPageData");
        heroPage = mockHeroPageData;
    } else {
        const payload = await getPayload();
        heroPage = await payload.findGlobal({
            slug: "hero-page",
        });
    }
    return heroPage;
};
