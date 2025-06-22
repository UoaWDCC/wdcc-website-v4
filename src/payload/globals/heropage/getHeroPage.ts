"use server";

import { unstable_cache as cache } from "next/cache";
import { HeroData } from "@/app/(main)/(hero)/_data/homeData";
import { parseHeroPage } from "@/payload/globals/heropage/parseHeroPage";
import { getPayload } from "@/utils/payload";

// cache cms data
const fetchHeroPage = cache(
    async () => {
        const payload = await getPayload();
        const data = await payload.findGlobal({
            slug: "hero-page",
        });

        const fetchedAt = new Date().toLocaleTimeString();
        return { data, fetchedAt };
    },
    ["hero-page"],
    { revalidate: 60 }
);

export const getHeroPage = async () => {
    const { data, fetchedAt } = await fetchHeroPage();

    let parsedData = parseHeroPage(data);

    // hard-coded value
    if (!parsedData) {
        parsedData = HeroData;
    }

    return { data: parsedData, fetchedAt };
};
