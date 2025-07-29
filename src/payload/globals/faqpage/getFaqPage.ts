"use server";

import { FaqPage } from "@/payload/payload-types";
import { getPayload } from "@/payload/mock";


export const getFaqPage = async (): Promise<FaqPage> => {
    const payload = await getPayload();
    const faqPage = await payload.findGlobal({
        slug: "faq-page",
    });

    return faqPage;
};