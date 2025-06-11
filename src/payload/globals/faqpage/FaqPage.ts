import { GlobalConfig } from "payload";

export const FaqPage: GlobalConfig = {
    slug: "faq-page",
    label: "Faq Page",
    access: {
        read: () => true, // Publicly accessible
    },
    fields: [
        {
            name: "info",
            label: "FAQ Info",
            type: "text",
            required: true,
            defaultValue: "Here are some of the most frequently asked questions about our club, answered!",
        },
        {
            name: "sections",
            label: "FAQ Sections",
            type: "array",
            required: true,
            fields: [
                {
                    name: "name",
                    label: "Section Name",
                    type: "text",
                    required: true,
                },
                {
                    name: "faqs",
                    label: "FAQs",
                    type: "array",
                    required: true,
                    fields: [
                        {
                            name: "question",
                            label: "Question",
                            type: "text",
                            required: true,
                        },
                        {
                            name: "answer",
                            label: "Answer",
                            type: "textarea",
                            required: true,
                        },
                    ],
                },
                {
                    name: "colors",
                    label: "Section Colors",
                    type: "group",
                    fields: [
                        {
                            name: "tabBg",
                            label: "Tab Background",
                            type: "text",
                            required: true,
                        },
                        {
                            name: "tabCircle",
                            label: "Tab Circle",
                            type: "text",
                            required: true,
                        },
                    ],
                },
            ],
        },
    ],
};

export default FaqPage;
