import type { CollectionConfig } from "payload";

export const MediaCollection: CollectionConfig = {
    slug: "media",
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true,
        },
    ],
};
