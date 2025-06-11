import type { CollectionConfig } from "payload";

export const Partners: CollectionConfig = {
    slug: "partners",
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "href",
            type: "text",
            required: true,
        },
        {
            name: "alt",
            type: "text",
            required: true,
        },
    ],

    upload: {
        disableLocalStorage: true,
    },
};
