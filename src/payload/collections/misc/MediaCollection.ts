import type { CollectionConfig } from "payload";
import { cacheUploadedFile } from "../../hooks/cacheFiles";

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
            required: true,
        },
    ],
    upload: {
        disableLocalStorage: true,
        modifyResponseHeaders: cacheUploadedFile,
    },
};
