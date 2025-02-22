import { GlobalConfig } from "payload";

export const ExecsPage: GlobalConfig = {
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
        },
        {
            name: "description",
            type: "textarea",
            required: true,
            defaultValue: "Learn more about our executive team and their roles.",
        },
        {
            name: "teams",
            type: "array",
            required: true,
            fields: [
                {
                    name: "teamName",
                    type: "text",
                    required: true,
                },
                {
                    name: "teamDescription",
                    type: "textarea",
                    required: true,
                },
                {
                    name: "execs",
                    type: "array",
                    fields: [
                        {
                            name: "name",
                            type: "text",
                            required: true,
                        },
                        {
                            name: "role",
                            type: "text",
                            required: true,
                        },
                        {
                            name: "image",
                            type: "upload",
                            relationTo: "media",
                        },
                        {
                            name: "description",
                            type: "textarea",
                            required: true,
                        },
                        {
                            name: "joined",
                            type: "text",
                            required: true,
                        },
                    ],
                },
            ],
        },
    ],
};

export default ExecsPage;
