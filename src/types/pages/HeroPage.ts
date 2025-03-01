import { WhatWeDoCardProps } from "@app/_components/WhatWeDoCard";

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
                src: string;
                alt: string;
            }[];
        };
        silver: {
            sponsors: {
                src: string;
                alt: string;
            }[];
        };
        tech: {
            sponsors: {
                src: string;
                alt: string;
            }[];
        };
        community: {
            sponsors: {
                src: string;
                alt: string;
            }[];
        };
    };
};

//too many same named things kill me
export type SponsorSectionType = {
    gold: {
        sponsors: {
            src: string;
            alt: string;
        }[];
    };
    silver: {
        sponsors: {
            src: string;
            alt: string;
        }[];
    };
    tech: {
        sponsors: {
            src: string;
            alt: string;
        }[];
    };
    community: {
        sponsors: {
            src: string;
            alt: string;
        }[];
    };
};
