import type { CollectionConfig } from "payload";
import { difficulties } from "@/types/models/Project";
import { technologiesList } from "@/assets/svg/technologies";
import { SLUG } from "@/utils/enums/slug";

export const ProjectsCollection: CollectionConfig = {
    slug: SLUG.PROJECT,
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: "slug",
    },
    fields: [
        {
            label: "General",
            type: "collapsible",
            fields: [
                {
                    name: "slug",
                    type: "text",
                    admin: {
                        placeholder: "Please type the project slug here.",
                    },
                    required: true,
                    // unique: true, (combination of slug and year has to be unique, but there's no way to enforce that in Payload I think)
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
                    name: "technologies",
                    type: "select",
                    defaultValue: [],
                    options: Object.keys(technologiesList),
                    hasMany: true,
                    required: true,
                },
                {
                    name: "difficulty",
                    type: "select",
                    defaultValue: "unassigned",
                    options: [...difficulties],
                    required: true,
                },
            ],
        },
        {
            label: "Project Card",
            type: "collapsible",
            fields: [
                {
                    name: "name",
                    type: "text",
                    admin: {
                        placeholder: "Please type the project name here. e.g (ASPA registration website)",
                    },
                    required: true,
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
                {
                    name: "thumbnail",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                    displayPreview: true,
                },
            ],
        },
        {
            label: "Project Page",
            type: "collapsible",
            fields: [
                {
                    name: "extendedName",
                    type: "text",
                    admin: {
                        placeholder: "Please type the extended project name here (will show inside the page)",
                    },
                },
                {
                    name: "extendedDescription",
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
            label: "Links",
            type: "collapsible",
            fields: [
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
            ],
        },
        {
            label: "Team",
            type: "collapsible",
            fields: [
                {
                    type: "row",
                    fields: [
                        {
                            name: "manager",
                            label: "Project Manager",
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
                            label: "Tech Lead",
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
                    label: "Project Members",
                    type: "array",
                    admin: {
                        className: "horizontal-array",
                    },
                    defaultValue: [],
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
                            options: ["developer", "designer", "tutor"],
                            defaultValue: "developer",
                            required: true,
                        },
                        { name: "image", type: "upload", relationTo: "media", displayPreview: true },
                    ],
                },
            ],
        },
    ],
};
