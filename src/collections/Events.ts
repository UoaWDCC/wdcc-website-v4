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
                    required: true,
                    unique: true,
                    admin: {
                        placeholder: "Please type a slug  here.",
                    },
                },
                {
                    name: "title",
                    type: "text",
                    required: true,
                    admin: {
                        placeholder: "Please type the event title here.",
                    },
                },
                {
                    name: "Description",
                    type: "text",
                    required: true,
                    admin: {
                        placeholder: "Please type the event description here.",
                    },
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
                    admin: {
                        placeholder: "Please type the event location here.",
                    },
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
                    admin: {
                        placeholder: "Please type the page description here.",
                    },
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
