import { Event as CMSEVENT, Media } from "@/payload-types";

import { Event } from "../models";

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
            src: (CmsEvent.thumbnail as Media)?.url || "",
            alt: (CmsEvent.thumbnail as Media)?.alt || "",
        },
        page: {
            description: CmsEvent.page.Description,
            image: {
                src: (CmsEvent.page.image as Media)?.url || "",
                alt: (CmsEvent.page.image as Media)?.alt || "",
            },
        },
        collabPartners: CmsEvent.collabPartners
            ? CmsEvent.collabPartners.filter((partner) =>
                  [
                      "Atlassian",
                      "AWS",
                      "EY",
                      "PARTLY",
                      "RuffByte",
                      "Madrat Interactive",
                      "Google",
                      "Janestreet",
                      "Sandfield",
                  ].includes(partner)
              )
            : undefined,
    };
};
