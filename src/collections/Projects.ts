import type { CollectionConfig } from "payload";

import { technologiesList } from "@/assets/svg/technologies";
import { SLUG } from "@/libs/enums/slug";

export const Project: CollectionConfig = {
    slug: SLUG.PROJECTS,
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: "thumbnail",
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
                    admin: {
                        placeholder: "Please type the project slug here.",
                    },
                    required: true,
                    unique: true,
                },
                {
                    name: "year",
                    type: "text",
                    admin: {
                        placeholder: "Please type the project year here. e.g (2025)",
                    },
                    required: true,
                },
                {
                    name: "client",
                    type: "text",
                    admin: {
                        placeholder: "Please type the project client name here. e.g (Youth Of Orakei)",
                    },
                    required: true,
                },
                {
                    name: "name",
                    type: "group",
                    fields: [
                        {
                            name: "default",
                            type: "text",
                            admin: {
                                placeholder: "Please type the project name here. e.g (ASPA registration website)",
                            },
                            required: true,
                        },
                        {
                            name: "extended",
                            type: "text",
                            admin: {
                                placeholder: "Please type the extended project name here (will show inside the page)",
                            },
                        },
                    ],
                },
                {
                    name: "description",
                    type: "text",

                    admin: {
                        placeholder:
                            "Please type a short project description here, this will be shown on the project card.",
                    },
                    required: true,
                },
            ],
        },
        {
            name: "Project Page",
            type: "group",
            fields: [
                {
                    name: "description",
                    type: "textarea",
                    admin: {
                        placeholder:
                            "Please type the project description here, this will be shown inside the project's page.",
                    },
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
            options: Array.from(technologiesList),
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
                    admin: {
                        placeholder: "Please type the first link's label here.",
                    },
                },
                {
                    name: "href",
                    type: "text",
                    required: true,
                    admin: {
                        placeholder: "Please type where the the first link should redirect to here.",
                    },
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
                    admin: {
                        placeholder: "Please type the second link's label here.",
                    },
                },
                {
                    name: "href",
                    type: "text",
                    required: true,
                    admin: {
                        placeholder: "Please type where the the second link should redirect to here.",
                    },
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
                                {
                                    name: "name",
                                    type: "text",
                                    required: true,
                                    admin: {
                                        placeholder: "Please type the project manager's name here.",
                                    },
                                },
                                { name: "image", type: "upload", relationTo: "media", displayPreview: true },
                            ],
                        },
                        {
                            name: "techlead",
                            label: "tech lead",
                            type: "group",
                            fields: [
                                {
                                    name: "name",
                                    type: "text",
                                    required: true,
                                    admin: {
                                        placeholder: "Please type the tech lead's name here.",
                                    },
                                },
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
                        {
                            name: "name",
                            type: "text",
                            required: true,
                            admin: {
                                placeholder: "Please type the project member's name here.",
                            },
                        },
                        {
                            name: "role",
                            type: "select",
                            options: ["developer", "designer"],
                            required: true,
                        },
                        { name: "image", type: "upload", relationTo: "media", displayPreview: true },
                    ],
                },
            ],
        },
    ],
};
