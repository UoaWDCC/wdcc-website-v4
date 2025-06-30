"use server";

import { FaqPage } from "@/payload/payload-types";
import { getPayload } from "@/utils/payload";
import { mockFaqPageData } from "./mockFaqPageData";

export const getFaqPage = async () => {
    let faqPage: FaqPage;
    if (process.env.MOCK_DATA === "true") {
        faqPage = mockFaqPageData;
    } else {
        const payload = await getPayload();
        faqPage = await payload.findGlobal({
            slug: "faq-page",
        });
    }
    return faqPage;
};
