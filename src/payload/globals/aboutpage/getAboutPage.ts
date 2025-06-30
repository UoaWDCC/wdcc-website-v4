"use server";

import { getPayload } from "@/utils/payload";


export const getAboutPage = async () => {
    let aboutPage;
    if (process.env.MOCK_DATA === "true") {
        const { mockAboutPageData } = await import("./mockAboutPageData");
        aboutPage = mockAboutPageData;
    } else {
        const payload = await getPayload();
        aboutPage = await payload.findGlobal({
            slug: "about-page",
        });
        console.log(JSON.stringify(aboutPage, null, 2)); // Log the full result for mock data
    }
    return aboutPage;
};