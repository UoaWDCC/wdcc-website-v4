"use server";

import { CmsFetchError, CmsParseError } from "@/utils/errors/CmsErrors";
import { getPayload } from "@/utils/payload";
import { parseFaqPage } from "./parseFaqPage";

export async function getFaqPage() {
    const payload = await getPayload();

    const faqPage = await payload.findGlobal({
        slug: "faq-page",
    });
    if (!faqPage) {
        throw new CmsFetchError("Failed to fetch FAQ Page data from Payload CMS.");
    }

    const parsedFaqPage = parseFaqPage(faqPage);
    if (!parsedFaqPage) {
        throw new CmsParseError("Failed to parse FAQ Page data from Payload CMS.");
    }

    return parsedFaqPage;
}
