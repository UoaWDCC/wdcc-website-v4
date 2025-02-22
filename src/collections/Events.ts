import type { CollectionConfig } from "payload";

import { EventCategories } from "@/types/models";

import { SLUG } from "@/libs/enums/slug";

export const Events: CollectionConfig = {
    slug: SLUG.EVENTS,
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "thumbnail",
            type: "upload",
            relationTo: "media",
            required: true,
            displayPreview: true,
        },
        {
            label: "general",
            type: "collapsible",
            fields: [
                {
                    name: "slug",
                    type: "text",
                    defaultValue: `2025-slug`,
                    required: true,
                    unique: true,
                },
                {
                    name: "title",
                    type: "text",
                    defaultValue: `eventTitle`,
                    required: true,
                },
                {
                    name: "Description",
                    type: "text",
                    required: true,
                },
                {
                    name: "time",
                    type: "date",
                    admin: {
                        date: {
                            pickerAppearance: "dayAndTime",
                        },
                    },
                    required: true,
                },
                {
                    name: "location",
                    type: "text",
                    required: true,
                },
                {
                    name: "category",
                    type: "select",
                    options: [...EventCategories],
                    required: true,
                },
            ],
        },

        {
            name: "page",
            type: "group",
            fields: [
                {
                    name: "Description",
                    type: "text",
                    required: true,
                },
                {
                    name: "image",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                    displayPreview: true,
                },
            ],
        },
        {
            name: "Partners",
            type: "upload",
            relationTo: "partners",
            hasMany: true,
        },
    ],
};
