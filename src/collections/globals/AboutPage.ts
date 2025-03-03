import { GlobalConfig } from "payload";

export const AboutPage: GlobalConfig = {
    slug: "about-page",
    label: "About Us",
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "header",
            label: "Header",
            type: "group",
            fields: [
                { name: "title", label: "Title", type: "text", required: true },
                { name: "content", label: "Content", type: "textarea", required: true },
            ],
        },
        {
            name: "genInfo",
            label: "General Info",
            type: "group",
            fields: [
                { name: "firstPart", label: "First Part", type: "textarea", required: true },
                { name: "secondPart", label: "Second Part", type: "textarea", required: true },
                {
                    name: "image",
                    label: "Image",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                },
            ],
        },
        {
            name: "whyJoin",
            label: "Why Join WDCC?",
            type: "group",
            fields: [
                { name: "title", label: "Title", type: "text", required: true },
                { name: "content", label: "Content", type: "textarea", required: true },
                {
                    name: "image",
                    label: "Image",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                },
            ],
        },
        {
            name: "clubStory",
            label: "The WDCC Story",
            type: "group",
            fields: [
                { name: "title", label: "Title", type: "text", required: true },
                { name: "content", label: "Content", type: "textarea", required: true },
                {
                    name: "image",
                    label: "Image",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                },
            ],
        },
        {
            name: "ourPeople",
            label: "Our People",
            type: "group",
            fields: [
                { name: "title", label: "Title", type: "text", required: true },
                { name: "content", label: "Content", type: "textarea", required: true },
                {
                    name: "image",
                    label: "Image",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                },
            ],
        },
        {
            name: "quoteSection",
            label: "Quote Section",
            type: "group",
            fields: [
                { name: "quote", label: "Quote", type: "textarea", required: true },
                { name: "author", label: "Author", type: "text", required: true },
                { name: "subscript", label: "Subscript", type: "text", required: true },
            ],
        },
        {
            name: "endImage",
            label: "End Image",
            type: "group",
            fields: [
                {
                    name: "image",
                    label: "Image",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                },
            ],
        },
    ],
};

export default AboutPage;
