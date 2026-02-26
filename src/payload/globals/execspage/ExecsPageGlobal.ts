import { GlobalConfig } from "payload";

// guess we doing globals now
//global's are different from collections as collections can have multiples records (or rows i guess) but globals only
//corrosponds to one record
export const ExecsPageGlobal: GlobalConfig = {
    slug: "execs-page",
    label: "Execs Page",
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
            defaultValue: "Meet the Team",
            admin: {
                placeholder: "Please type the page's title here.",
            },
        },
        {
            name: "description",
            type: "textarea",
            required: true,
            defaultValue: "Learn more about our executive team and their roles.",
            admin: {
                placeholder: "Please type the page's description here.",
            },
        },
        {
            name: "defaultYearSlug",
            type: "text",
            required: true,
            defaultValue: "2026",
            admin: {
                placeholder: "Please type the default exec year slug here. e.g (2026)",
            },
        },
        {
            name: "yearOptions",
            type: "array",
            required: true,
            fields: [
                {
                    name: "label",
                    type: "text",
                    required: true,
                    admin: {
                        placeholder: "Please type the button label here. e.g (2026)",
                    },
                },
                {
                    name: "slug",
                    type: "text",
                    required: true,
                    admin: {
                        readOnly: true,
                        placeholder: "Auto-generated from the label.",
                    },
                    hooks: {
                        beforeValidate: [
                            ({ value, siblingData }) => {
                                if (typeof siblingData?.label === "string" && siblingData.label.trim().length > 0) {
                                    return siblingData.label.trim();
                                }

                                return value;
                            },
                        ],
                    },
                },
            ],
        },
    ],
};

export default ExecsPageGlobal;
