"use server";

import { getPayload } from "@/utils/payload";

export const getHeroPage = async () => {
    const payload = await getPayload();
    const getHeroPage = await payload.findGlobal({
        slug: "hero-page",
    });

    return getHeroPage;
};
