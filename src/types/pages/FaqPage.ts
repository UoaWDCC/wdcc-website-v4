import { Faq } from "../models/Faq";

export type FaqSection = {
    name: string;
    faqs: Faq[];
    colors: FaqColors;
};

export type FaqColors = {
    tabBg: string;
    tabCircle: string;
};

export type FaqPage = {
    info: string;
    sections: FaqSection[];
};
