import { Faq } from "@/types/models";

import { eventsFaqData } from "./eventsFaq.data";
import { generalFaqData } from "./generalFaq.data";
import { projectsFaqData } from "./projectsFaq.data";
import { teamFaqData } from "./teamFaq.data";

export interface FaqSection {
    name: string;
    faqs: Faq[];
    colors: faqColors;
}

export interface faqColors {
    tabBg: string;
    tabCircle: string;
}

export const faqData = {
    info: "Here are some of the most frequently asked questions about our club, answered!",
    sections: [
        {
            name: "General",
            faqs: generalFaqData,
            colors: {
                tabBg: "bg-blue-200",
                tabCircle: "bg-blue-500",
            },
        },
        {
            name: "Projects",
            faqs: projectsFaqData,
            colors: {
                tabBg: "bg-yellow-200",
                tabCircle: "bg-orange-400",
            },
        },
        {
            name: "Events",
            faqs: eventsFaqData,
            colors: {
                tabBg: "bg-green-200",
                tabCircle: "bg-green-600",
            },
        },
        {
            name: "Team",
            faqs: teamFaqData,
            colors: {
                tabBg: "bg-purple-100",
                tabCircle: "bg-purple-500",
            },
        },
    ] as FaqSection[],
};
