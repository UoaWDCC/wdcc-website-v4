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
    ],
};

export default ExecsPageGlobal;
