import { FaqPage } from "@/types/pages/FaqPage";
import { FaqPage as CmsFaqPage } from "@/payload/payload-types";

export function parseFaqPage(CmsFaqPage: CmsFaqPage): FaqPage {
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
}
