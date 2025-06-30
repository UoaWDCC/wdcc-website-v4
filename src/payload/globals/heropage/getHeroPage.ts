"use server";

import { getPayload } from "@/utils/payload";

export const getHeroPage = async () => {
    let heroPage;
    if (process.env.MOCK_DATA === "true") {
        const { mockHeroPageData } = await import("./mockHeroPageData");
        heroPage = mockHeroPageData;
    } else {
        const payload = await getPayload();
        heroPage = await payload.findGlobal({
            slug: "hero-page",
        });
        console.log(JSON.stringify(heroPage, null, 2)); // Log the full result for mock data
    }
    return heroPage;
};
