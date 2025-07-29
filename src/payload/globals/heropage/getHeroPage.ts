"use server";

import { getPayload } from "@/payload/mock";


export const getHeroPage = async () => {
    const payload = await getPayload();
    const getHeroPage = await payload.findGlobal({
        slug: "hero-page",
    });

    return getHeroPage;
};