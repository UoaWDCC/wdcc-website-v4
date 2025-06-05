import { Faq } from "../models";

export type FaqSection = {
    name: string;
    faqs: Faq[];
    colors: FaqColors;
}

export type FaqColors = {
    tabBg: string;
    tabCircle: string;
}

export type FaqPage = {
    info: string;
    sections: FaqSection[];
}
