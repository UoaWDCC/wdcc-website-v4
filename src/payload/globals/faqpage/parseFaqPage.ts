import { FaqPage as CmsFaqPage } from "@/payload/payload-types";
import { FaqPage } from "../../../types/pages/FaqPage";

export const parseFaqPage = (CmsFaqPage: CmsFaqPage): FaqPage | undefined => {
    if (!CmsFaqPage) {
        return undefined;
    }

    return {
        info: CmsFaqPage.info,
        sections: CmsFaqPage.sections.map((section) => ({
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
