import type { CollectionConfig } from "payload";
import { cacheUploadedFile } from "../../hooks/cacheFiles";

export const PartnersCollection: CollectionConfig = {
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
        modifyResponseHeaders: cacheUploadedFile,
    },
};
