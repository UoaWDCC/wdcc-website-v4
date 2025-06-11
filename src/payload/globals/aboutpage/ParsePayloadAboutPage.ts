import placeholder from "@/assets/image/600x400.png";
import { AboutPage as CmsAboutPage, Media } from "@/payload/payload-types";
import { AboutPage } from "../../../types/pages/AboutPage";

export const ParsePayloadAboutPage = (CmsAboutPage: CmsAboutPage): AboutPage | undefined => {
    if (!CmsAboutPage) {
        return undefined;
    }

    //need to move this to all parsers
    const getImageUrl = (image?: Media) => image?.url ?? placeholder;
    const getImageAlt = (image?: Media) => image?.url ?? "placeholder";

    return {
        header: {
            title: CmsAboutPage.header.title,
            content: CmsAboutPage.header.content,
        },
        genInfo: {
            firstPart: CmsAboutPage.genInfo.firstPart,
            secondPart: CmsAboutPage.genInfo.secondPart,
            image: getImageUrl(CmsAboutPage.genInfo.image as Media),
            imageAlt: getImageAlt(CmsAboutPage.genInfo.image as Media),
        },
        whyJoin: {
            title: CmsAboutPage.whyJoin.title,
            content: CmsAboutPage.whyJoin.content,
            image: getImageUrl(CmsAboutPage.whyJoin.image as Media),
            imageAlt: getImageAlt(CmsAboutPage.whyJoin.image as Media),
        },
        clubStory: {
            title: CmsAboutPage.clubStory.title,
            content: CmsAboutPage.clubStory.content,
            image: getImageUrl(CmsAboutPage.clubStory.image as Media),
            imageAlt: getImageAlt(CmsAboutPage.clubStory.image as Media),
        },
        ourPeople: {
            title: CmsAboutPage.ourPeople.title,
            content: CmsAboutPage.ourPeople.content,
            image: getImageUrl(CmsAboutPage.ourPeople.image as Media),
            imageAlt: getImageAlt(CmsAboutPage.ourPeople.image as Media),
        },
        quoteSection: {
            quote: CmsAboutPage.quoteSection.quote,
            author: CmsAboutPage.quoteSection.author,
            subscript: CmsAboutPage.quoteSection.subscript,
        },
        endImage: {
            image: getImageUrl(CmsAboutPage.endImage.image as Media),
            imageAlt: getImageAlt(CmsAboutPage.endImage.image as Media),
        },
    };
};
