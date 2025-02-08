import type { CollectionConfig } from "payload";

import { SLUG } from "@/libs/enums/slug";

export const Projects: CollectionConfig = {
    slug: SLUG.PROJECTS,
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "projectName",
            type: "text",
            required: true,
        },
        {
            name: "projectNameExtended",
            type: "text",
            required: true,
        },
        {
            name: "client",
            type: "text",
            required: true,
        },
        {
            name: "description",
            type: "textarea",
            required: true,
        },
        {
            name: "descriptionExtended",
            type: "textarea",
            required: true,
        },
        {
            name: "logo",
            type: "upload",
            relationTo: "media",
            required: true,
        },
        {
            name: "year",
            type: "text",
            required: true,
        },
        {
            name: "technologies",
            type: "array",
            fields: [
                {
                    name: "technology",
                    type: "text",
                },
            ],
        },
        {
            name: "slug",
            type: "text",
            unique: true,
        },
        {
            name: "team",
            type: "group",
            fields: [
                {
                    name: "techlead",
                    type: "group",
                    fields: [
                        { name: "name", type: "text", required: true },
                        { name: "image", type: "upload", relationTo: "media" },
                    ],
                },
                {
                    name: "manager",
                    type: "group",
                    fields: [
                        { name: "name", type: "text", required: true },
                        { name: "image", type: "upload", relationTo: "media" },
                    ],
                },
                {
                    name: "members",
                    type: "array",
                    fields: [
                        { name: "name", type: "text", required: true },
                        {
                            name: "role",
                            type: "select",
                            options: ["engineer", "techlead", "designer", "manager"],
                            required: true,
                        },
                        { name: "image", type: "upload", relationTo: "media" },
                    ],
                },
            ],
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
