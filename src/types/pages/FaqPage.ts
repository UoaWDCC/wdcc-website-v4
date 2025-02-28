export interface FaqSection {
    name: string;
    faqs: Faq[];
    colors: FaqColors;
}

export interface FaqColors {
    tabBg: string;
    tabCircle: string;
}

export interface FaqPage {
    info: string;
    sections: FaqSection[];
}
