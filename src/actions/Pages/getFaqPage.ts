"use server";

import { getPayload } from "@/libs/payload";
import { FaqPage } from "@/types/payload-types";

export const getFaqPage = async (): Promise<FaqPage> => {
    const payload = await getPayload();
    const faqPage = await payload.findGlobal({
        slug: "faq-page",
    });

    return faqPage;
};
