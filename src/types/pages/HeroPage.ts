import { StaticImageData } from "next/image";
import { WhatWeDoCardProps } from "@/app/(main)/(hero)/_components/WhatWeDoCard";

export type SponsorSectionType = {
    gold: {
        sponsors: {
            src: string | StaticImageData;
            alt: string;
        }[];
    };
    silver: {
        sponsors: {
            src: string | StaticImageData;
            alt: string;
        }[];
    };
    tech: {
        sponsors: {
            src: string | StaticImageData;
            alt: string;
        }[];
    };
    community: {
        sponsors: {
            src: string | StaticImageData;
            alt: string;
        }[];
    };
};

export type HeroPage = {
    Hero: {
        title: string;
        blurb: string;
    };
    ThisIsWDCC: {
        description: string;
        whatWeDo: {
            columns: WhatWeDoCardProps[];
        };
    };
    SponsorSection: SponsorSectionType;
    SignUpCard: {
        title: string;
        descriptionLineOne: string;
        descriptionLineTwo: string;
    };
};
