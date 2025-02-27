"use server";

import { getPayload } from "@/libs/payload";

export const getAboutPage = async () => {
    const payload = await getPayload();
    const getAboutPage = await payload.findGlobal({
        slug: "about-page",
    });

    return getAboutPage;
};
