"use server";

import { getPayload } from "@/payload/mock";
import { FaqPage } from "@/payload/payload-types";

export const getFaqPage = async (): Promise<FaqPage> => {
    const payload = await getPayload();
    const faqPage = await payload.findGlobal({
        slug: "faq-page",
    });

    return faqPage;
};
