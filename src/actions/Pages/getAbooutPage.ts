"use server";

import { getPayload } from "@/utils/payload";

export const getAboutPage = async () => {
    const payload = await getPayload();
    const AboutPage = await payload.findGlobal({
        slug: "about-page",
    });

    return AboutPage;
};
