import * as z from "zod/v4";
import placeholder from "@/assets/image/600x400.png";
import { HeroPage as CmsHeroPage, Partner } from "@/payload/payload-types";

export const parseHeroPage = (CmsHeroPage: CmsHeroPage) => {
    if (!CmsHeroPage) {
        return undefined;
    }

    return {
        HERO: {
            title: CmsHeroPage.hero.title,
            blurb: CmsHeroPage.hero.blurb,
        },
        THIS_IS_WDCC: {
            description: CmsHeroPage.thisIsWDCC.description,
            whatWeDo: {
                columns:
                    CmsHeroPage.thisIsWDCC.whatWeDo?.map((column) => ({
                        index: column.index,
                        title: column.title,
                        slug: column.slug,
                        description: column.description,
                        variant: { color: column.variant },
                    })) ?? [],
            },
        },
        SPONSOR_SECTION: {
            gold: {
                sponsors:
                    CmsHeroPage.sponsorSection?.gold?.map((partner) => ({
                        src: (partner as Partner).url ?? placeholder.src,
                        alt: (partner as Partner).alt,
                    })) ?? [],
            },
            silver: {
                sponsors:
                    CmsHeroPage.sponsorSection?.silver?.map((partner) => ({
                        src: (partner as Partner).url ?? placeholder.src,
                        alt: (partner as Partner).alt,
                    })) ?? [],
            },
            tech: {
                sponsors:
                    CmsHeroPage.sponsorSection?.tech?.map((partner) => ({
                        src: (partner as Partner).url ?? placeholder.src,
                        alt: (partner as Partner).alt,
                    })) ?? [],
            },
            community: {
                sponsors:
                    CmsHeroPage.sponsorSection?.community?.map((partner) => ({
                        src: (partner as Partner).url ?? placeholder.src,
                        alt: (partner as Partner).alt,
                    })) ?? [],
            },
        },
        SIGN_UP_CARD: {
            title: CmsHeroPage.signUpCard.title,
            descriptionLineOne: CmsHeroPage.signUpCard.descriptionLineOne,
            descriptionLineTwo: CmsHeroPage.signUpCard.descriptionLineTwo,
        },
    } as const;
};

export const sponsorTierSchema = z.object({
    sponsors: z.array(
        z.object({
            src: z.string(),
            alt: z.string(),
        })
    ),
});

export const ZHeroPageSchema = z.object({
    HERO: z.object({
        title: z.string().min(1),
        blurb: z.string().min(1),
    }),
    THIS_IS_WDCC: z.object({
        description: z.string().min(1),
        whatWeDo: z.object({
            columns: z.array(
                z.object({
                    index: z.string().min(1),
                    title: z.string().min(1),
                    slug: z.string().min(1),
                    description: z.string().min(1),
                    variant: z.object({ color: z.enum(["blue", "green", "yellow"]) }),
                })
            ),
        }),
    }),
    SPONSOR_SECTION: z.object({
        gold: sponsorTierSchema,
        silver: sponsorTierSchema,
        tech: sponsorTierSchema,
        community: sponsorTierSchema,
    }),
    SIGN_UP_CARD: z.object({
        title: z.string().min(1),
        descriptionLineOne: z.string().min(1),
        descriptionLineTwo: z.string().min(1),
    }),
});

export type HeroPageSchema = z.infer<typeof ZHeroPageSchema>;
