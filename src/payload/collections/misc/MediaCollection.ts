import type { CollectionConfig } from "payload";

export const MediaCollection: CollectionConfig = {
    slug: "media",
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "alt",
            type: "text",
            defaultValue: "",
        },
    ],
    upload: {
        disableLocalStorage: true,
    },
};
