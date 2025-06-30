"use server";

import { getPayload } from "@/utils/payload";

export const getFaqPage = async () => {
    let faqPage;
    if (process.env.MOCK_DATA === "true") {
        const { mockFaqPageData } = await import("./mockFaqPageData");
        faqPage = mockFaqPageData;
    } else {
        const payload = await getPayload();
        faqPage = await payload.findGlobal({
            slug: "faq-page",
        });
        console.log(JSON.stringify(faqPage, null, 2)); // Log the full result for mock data
    }
    return faqPage;
};
