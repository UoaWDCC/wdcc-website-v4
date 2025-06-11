import { GlobalConfig } from "payload";

export const ProjectsPageGlobal: GlobalConfig = {
    slug: "projects-page",
    label: "Projects Page",
    fields: [
        {
            name: "header",
            type: "group",
            fields: [
                { name: "title", type: "text", required: true },
                { name: "content", type: "textarea", required: true },
                {
                    name: "buttons",
                    type: "array",
                    fields: [
                        { name: "text", type: "text", required: true },
                        { name: "link", type: "text", required: true },
                    ],
                    required: true,
                },
            ],
        },
        {
            name: "infoSection",
            type: "group",
            fields: [
                { name: "main", type: "textarea", required: true },
                {
                    name: "checkboxes",
                    type: "group",
                    fields: [
                        { name: "title", type: "text", required: true },
                        {
                            name: "checks",
                            type: "array",
                            fields: [{ name: "text", type: "text", required: true }],
                        },
                    ],
                },
            ],
        },
        {
            name: "operationSection",
            type: "group",
            fields: [
                { name: "title", type: "text", required: true },
                { name: "content", type: "textarea", required: true },
            ],
        },
        {
            name: "rolesSection",
            type: "group",
            fields: [
                { name: "title", type: "text", required: true },
                {
                    name: "roles",
                    type: "array",
                    fields: [
                        {
                            name: "color",
                            type: "select",
                            options: [
                                { label: "Blue", value: "blue" },
                                { label: "Purple", value: "purple" },
                                { label: "Yellow", value: "yellow" },
                                { label: "Green", value: "green" },
                            ],
                            required: true,
                        },
                        { name: "title", type: "text", required: true },
                        { name: "slug", type: "text", required: true },
                        { name: "description", type: "textarea", required: true },
                    ],
                },
            ],
        },
        {
            name: "featuredSection",
            type: "group",
            fields: [
                { name: "title", type: "text", required: true },
                { name: "cta", type: "text", required: true },
            ],
        },
    ],
};

export default ProjectsPageGlobal;
