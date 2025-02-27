import { StaticImageData } from "next/image";

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

//about page

type AboutSection = {
    title: string;
    content: string;
    image: string | StaticImageData;
    imageAlt: string;
};

export type AboutPage = {
    header: {
        title: string;
        content: string;
    };
    genInfo: {
        firstPart: string;
        secondPart: string;
        image: string | StaticImageData;
        imageAlt: string;
    };
    whyJoin: AboutSection;
    clubStory: AboutSection;
    ourPeople: AboutSection;
    quoteSection: {
        quote: string;
        author: string;
        subscript?: string;
    };
    endImage: {
        image: string | StaticImageData;
        imageAlt: string;
    };
};
