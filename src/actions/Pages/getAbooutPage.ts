"use server";

import { getPayload } from "@/libs/payload";

export const getAboutPage = async () => {
    const payload = await getPayload();
    const AboutPage = await payload.findGlobal({
        slug: "about-page",
    });

    return AboutPage;
};
