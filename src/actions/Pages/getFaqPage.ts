"use server";

import { getPayload } from "@/libs/payload";

export const getFaqPage = async () => {
    const payload = await getPayload();
    const getFaqPage = await payload.findGlobal({
        slug: "faq-page",
    });

    return getFaqPage;
};
