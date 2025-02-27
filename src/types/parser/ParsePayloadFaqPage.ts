import { FaqPage as CmsFaqPage } from "@/payload-types";

import { FaqPage } from "../pages";

export const ParsePayloadFaqPage = (CmsEventPage: CmsFaqPage): FaqPage | undefined => {
    if (!CmsEventPage) {
        return undefined;
    }

    return {
        info: CmsEventPage.info,
        sections: CmsEventPage.sections.map((section) => ({
            name: section.name,
            faqs: section.faqs.map((faq) => ({
                question: faq.question,
                answer: faq.answer,
            })),
            colors: {
                tabBg: section.colors.tabBg,
                tabCircle: section.colors.tabCircle,
            },
        })),
    };
};
