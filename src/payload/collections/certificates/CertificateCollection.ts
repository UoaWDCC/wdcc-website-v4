import type { CollectionConfig } from "payload";
import { SLUG } from "@/utils/enums/slug";

export const CertificateCollection: CollectionConfig = {
    slug: SLUG.CERTIFICATE,
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true,
        },
        {
            name: "role",
            type: "text",
            required: true,
        },
        {
            name: "project",
            type: "relationship",
            relationTo: SLUG.PROJECT,
            required: true,
        },
        {
            name: "style",
            type: "text",
            defaultValue: "default-2025",
            required: true,
        },
    ],
};
