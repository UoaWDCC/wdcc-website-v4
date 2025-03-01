import { StaticImageData } from "next/image";

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
