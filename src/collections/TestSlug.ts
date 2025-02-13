import type { CollectionConfig } from "payload";

import { technologiesList } from "@/assets/svg/technologies";
import { SLUG } from "@/libs/enums/slug";

const currentYear = new Date().getFullYear();

export const TestSlug: CollectionConfig = {
    slug: SLUG.TEST,
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: "slug", // first column in edit view
    },
    fields: [
        {
            name: "cardImage",
            type: "upload",
            relationTo: "media",
            required: true,
        },
        {
            label: "general",
            type: "collapsible",
            fields: [
                {
                    name: "slug",
                    type: "text",
                    defaultValue: `${currentYear}-slug`,
                    required: true,
                    unique: true,
                },
                {
                    name: "year",
                    type: "date",
                    defaultValue: () => new Date().toISOString(),
                    admin: {
                        date: {
                            pickerAppearance: "monthOnly",
                            displayFormat: "yyyy",
                        },
                    },
                    required: true,
                },
                {
                    name: "client",
                    type: "text",
                    defaultValue: "client name",
                    required: true,
                },
                {
                    name: "name",
                    type: "group",
                    fields: [
                        {
                            name: "default",
                            type: "text",
                            defaultValue: "project name",
                            required: true,
                        },
                        {
                            name: "extended",
                            type: "text",
                        },
                    ],
                },
                {
                    name: "description",
                    type: "text",
                    defaultValue: "project description",
                    required: true,
                },
            ],
        },
        {
            name: "brief",
            type: "group",
            fields: [
                {
                    name: "description",
                    type: "textarea",
                    defaultValue: "brief description of the project's functionality and stuff",
                    required: true,
                },
                {
                    name: "image",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                },
            ],
        },
        {
            name: "technologies",
            type: "select",
            defaultValue: ["react"],
            options: Array.from(technologiesList),
            hasMany: true,
            required: true,
        },
        {
            name: "links",
            type: "array",
            fields: [
                {
                    name: "label",
                    type: "text",
                    required: true,
                },
                {
                    name: "url",
                    type: "text",
                    required: true,
                },
            ],
        },
        {
            type: "row",
            fields: [
                {
                    name: "project manager",
                    type: "group",
                    fields: [
                        { name: "name", type: "text", required: true },
                        { name: "image", type: "upload", relationTo: "media" },
                    ],
                },
                {
                    name: "technical lead",
                    type: "group",
                    fields: [
                        { name: "name", type: "text", required: true },
                        { name: "image", type: "upload", relationTo: "media" },
                    ],
                },
            ],
        },
        {
            name: "project members",
            type: "array",
            admin: {
                className: "horizontal-array",
            },
            defaultValue: [{}, {}],
            fields: [
                { name: "name", type: "text", required: true },
                {
                    name: "role",
                    type: "select",
                    options: ["engineer", "designer"],
                    required: true,
                },
                { name: "image", type: "upload", relationTo: "media" },
            ],
        },
    ],
};
