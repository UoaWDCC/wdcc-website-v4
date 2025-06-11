import { WhatWeDoCardProps } from "@/app/(main)/(hero)/_components/WhatWeDoCard";
import { StaticImageData } from "next/image";

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
    SponsorSection: {
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
    SignUpCard: {
        title: string;
        descriptionLineOne: string;
        descriptionLineTwo: string;
    };
};

//too many same named things kill me
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
