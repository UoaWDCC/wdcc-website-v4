import type { CollectionConfig } from "payload";

import { technologiesList } from "@/assets/svg/technologies";
import { SLUG } from "@/utils/enums/slug";

export const TestSlug: CollectionConfig = {
    slug: SLUG.TEST,
    access: {
        read: () => true,
    },
    fields: [
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
                    name: "year",
                    type: "text",
                    defaultValue: `2025`,
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
                    displayPreview: true,
                },
            ],
        },
        {
            name: "technologies",
            type: "select",
            defaultValue: ["react"],
            options: Object.keys(technologiesList),
            hasMany: true,
            required: true,
        },
        {
            name: "primaryLink",
            type: "group",
            fields: [
                {
                    name: "label",
                    type: "text",
                    required: true,
                },
                {
                    name: "href",
                    type: "text",
                    required: true,
                },
            ],
        },
        {
            name: "secondaryLink",
            type: "group",
            fields: [
                {
                    name: "label",
                    type: "text",
                    required: true,
                },
                {
                    name: "href",
                    type: "text",
                    required: true,
                },
            ],
        },
        {
            name: "team",
            type: "group",
            fields: [
                {
                    type: "row",
                    fields: [
                        {
                            name: "manager",
                            label: "project manager",
                            type: "group",
                            fields: [
                                { name: "name", type: "text", required: true },
                                { name: "image", type: "upload", relationTo: "media", displayPreview: true },
                            ],
                        },
                        {
                            name: "techlead",
                            label: "tech lead",
                            type: "group",
                            fields: [
                                { name: "name", type: "text", required: true },
                                { name: "image", type: "upload", relationTo: "media", displayPreview: true },
                            ],
                        },
                    ],
                },
                {
                    name: "members",
                    label: "project members",
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
                        { name: "image", type: "upload", relationTo: "media", displayPreview: true },
                    ],
                },
            ],
        },
    ],
};
