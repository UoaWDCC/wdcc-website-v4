"use server";

import { HeroPage } from "@/payload/payload-types";
import { getPayload } from "@/utils/payload";
import { mockHeroPageData } from "./mockHeroPageData";

export const getHeroPage = async () => {
    let heroPage: HeroPage;
    if (process.env.MOCK_DATA === "true") {
        heroPage = mockHeroPageData;
    } else {
        const payload = await getPayload();
        heroPage = await payload.findGlobal({
            slug: "hero-page",
        });
    }
    return heroPage;
};
