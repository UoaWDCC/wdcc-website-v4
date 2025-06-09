"use server";

import { FaqPage } from "@/types/payload-types";

import { getPayload } from "@/utils/payload";

export const getFaqPage = async (): Promise<FaqPage> => {
    const payload = await getPayload();
    const faqPage = await payload.findGlobal({
        slug: "faq-page",
    });

    return faqPage;
};
