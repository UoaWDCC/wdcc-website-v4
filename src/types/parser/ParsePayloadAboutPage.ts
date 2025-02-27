import { AboutPage as CmsAboutPage, Media } from "@/payload-types";

import { AboutPage } from "../pages";

export const ParsePayloadAboutPage = (CmsAboutPage: CmsAboutPage): AboutPage | undefined => {
    if (!CmsAboutPage) {
        return undefined;
    }

    return {
        header: {
            title: CmsAboutPage.header.title,
            content: CmsAboutPage.header.content,
        },
        genInfo: {
            firstPart: CmsAboutPage.genInfo.firstPart,
            secondPart: CmsAboutPage.genInfo.secondPart,
            image: (CmsAboutPage.genInfo.image as Media)?.url as string,
            imageAlt: (CmsAboutPage.genInfo.image as Media)?.url as string,
        },
        whyJoin: {
            title: CmsAboutPage.whyJoin.title,
            content: CmsAboutPage.whyJoin.content,
            image: (CmsAboutPage.whyJoin.image as Media)?.url as string,
            imageAlt: (CmsAboutPage.whyJoin.image as Media)?.url as string,
        },
        clubStory: {
            title: CmsAboutPage.clubStory.title,
            content: CmsAboutPage.clubStory.content,
            image: (CmsAboutPage.clubStory.image as Media)?.url as string,
            imageAlt: (CmsAboutPage.clubStory.image as Media)?.url as string,
        },
        ourPeople: {
            title: CmsAboutPage.ourPeople.title,
            content: CmsAboutPage.ourPeople.content,
            image: (CmsAboutPage.ourPeople.image as Media)?.url as string,
            imageAlt: (CmsAboutPage.ourPeople.image as Media)?.url as string,
        },
        quoteSection: {
            quote: CmsAboutPage.quoteSection.quote,
            author: CmsAboutPage.quoteSection.author,
            subscript: CmsAboutPage.quoteSection.subscript,
        },
        endImage: {
            image: (CmsAboutPage.endImage.image as Media)?.url as string,
            imageAlt: (CmsAboutPage.endImage.image as Media)?.url as string,
        },
    };
};
