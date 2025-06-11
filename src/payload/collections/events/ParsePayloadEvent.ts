import { Event as CMSEVENT, Media, Partner } from "@/payload/payload-types";
import { Event } from "../../../types/models";

export const ParsePayloadEvent = (CmsEvent: CMSEVENT): Event | undefined => {
    if (!CmsEvent) {
        return undefined;
    }

    return {
        title: CmsEvent.title,
        slug: CmsEvent.slug,
        time: new Date(CmsEvent.time),
        location: CmsEvent.location,
        description: CmsEvent.Description,
        category: CmsEvent.category,
        thumbnail: {
            src: (CmsEvent.thumbnail as Media).url ?? "",
            alt: (CmsEvent.thumbnail as Media).alt ?? "",
        },
        page: {
            description: CmsEvent.page.Description,
            image: {
                src: (CmsEvent.page.image as Media).url ?? "",
                alt: (CmsEvent.page.image as Media).alt ?? "",
            },
        },
        partners: Array.isArray(CmsEvent.Partners)
            ? CmsEvent.Partners.map((partner) => ({
                  href: (partner as Partner).href ?? "",
                  src: (partner as Partner).url ?? "",
                  alt: (partner as Partner).alt ?? "",
              }))
            : [],
    };
};
