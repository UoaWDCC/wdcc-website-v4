import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
    slug: "media",
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "alt",
            type: "text",
            required: true,
        },
    ],

    upload: {
        disableLocalStorage: true,
        adminThumbnail: ({ doc }) => {
            if (doc?.filename) {
                return `https://${process.env.S3_BUCKET}.s3.${process.env.S3_REGIOn}.amazonaws.com/${doc.filename}`;
            }
            return null;
        },
    },
};
