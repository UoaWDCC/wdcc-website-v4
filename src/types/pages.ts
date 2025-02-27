import { Exec, Faq } from "./models";

//exec page

export type ExecPage = {
    info: string;
    teams: {
        title: string;
        description: string;
        execs: Exec[];
    }[];
};

//faq page
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
