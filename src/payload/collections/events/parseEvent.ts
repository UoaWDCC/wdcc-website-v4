import { Event } from "@/types/models/Event";
import { Event as CMSEVENT, Media, Partner } from "@/payload/payload-types";
import { sizedUrl } from "@/utils/payload";

export function parseEvent(CmsEvent: CMSEVENT): Event {
    return {
        title: CmsEvent.title,
        slug: CmsEvent.slug,
        time: new Date(CmsEvent.time),
        location: CmsEvent.location,
        description: CmsEvent.Description,
        category: CmsEvent.category,
        thumbnail: {
            src: sizedUrl(CmsEvent.thumbnail as Media, "medium") ?? "",
            alt: (CmsEvent.thumbnail as Media).alt ?? "",
        },
        page: {
            description: CmsEvent.page.Description,
            image: {
                src: sizedUrl(CmsEvent.page.image as Media, "medium") ?? "",
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
}
