import { card } from "@main/(landing)/_components/WhatWeDoCard";
import { VariantProps } from "tailwind-variants";
import { HeroPage } from "@/types/pages/HeroPage";
import placeholder from "@/assets/image/600x400.png";
import { HeroPage as CmsHeroPage, Partner } from "@/payload/payload-types";

export const ParsePayloadHeroPage = (CmsHeroPage: CmsHeroPage): HeroPage | undefined => {
    if (!CmsHeroPage) {
        return undefined;
    }

    //forgive me
    const mapVariantToProps = (variant: "blue" | "green" | "yellow"): VariantProps<typeof card> => {
        switch (variant) {
            case "blue":
                return { color: "blue" };
            case "green":
                return { color: "green" };
            case "yellow":
                return { color: "yellow" };
            default:
                return {};
        }
    };

    return {
        Hero: {
            title: CmsHeroPage.hero.title,
            blurb: CmsHeroPage.hero.blurb,
        },
        ThisIsWDCC: {
            description: CmsHeroPage.thisIsWDCC.description,
            whatWeDo: {
                columns:
                    CmsHeroPage.thisIsWDCC.whatWeDo?.map((column) => ({
                        index: column.index,
                        title: column.title,
                        slug: column.slug,
                        description: column.description,
                        variant: mapVariantToProps(column.variant),
                    })) ?? [],
            },
        },
        SponsorSection: {
            gold: {
                sponsors:
                    CmsHeroPage.sponsorSection?.gold?.map((partner) => ({
                        src: (partner as Partner).url ?? placeholder,
                        alt: (partner as Partner).alt,
                    })) ?? [],
            },
            silver: {
                sponsors:
                    CmsHeroPage.sponsorSection?.silver?.map((partner) => ({
                        src: (partner as Partner).url ?? placeholder,
                        alt: (partner as Partner).alt,
                    })) ?? [],
            },
            tech: {
                sponsors:
                    CmsHeroPage.sponsorSection?.tech?.map((partner) => ({
                        src: (partner as Partner).url ?? placeholder,
                        alt: (partner as Partner).alt,
                    })) ?? [],
            },
            community: {
                sponsors:
                    CmsHeroPage.sponsorSection?.community?.map((partner) => ({
                        src: (partner as Partner).url ?? placeholder,
                        alt: (partner as Partner).alt,
                    })) ?? [],
            },
        },
        SignUpCard: {
            title: CmsHeroPage.signUpCard.title,
            descriptionLineOne: CmsHeroPage.signUpCard.descriptionLineOne,
            descriptionLineTwo: CmsHeroPage.signUpCard.descriptionLineTwo,
        },
    };
};
