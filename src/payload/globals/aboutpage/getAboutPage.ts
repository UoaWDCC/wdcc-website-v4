"use server";

import { AboutPage } from "@/payload/payload-types";
import { getPayload } from "@/utils/payload";
import { mockAboutPageData } from "./mockAboutPageData";

export const getAboutPage = async () => {
    let aboutPage: AboutPage;
    if (process.env.MOCK_DATA === "true") {
        aboutPage = mockAboutPageData;
    } else {
        const payload = await getPayload();
        aboutPage = await payload.findGlobal({
            slug: "about-page",
        });
    }
    return aboutPage;
};