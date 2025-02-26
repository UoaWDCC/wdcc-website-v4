import { GlobalConfig } from "payload";

// guess we doing globals now
//global's are different from collections as collections can have multiples records (or rows i guess) but globals only
//corrosponds to one record
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
            //maybe execs could be a collection and this could reference that collection instead.
            name: "teams",
            type: "array",
            required: true,
            fields: [
                {
                    name: "teamName",
                    type: "text",
                    required: true,
                    admin: {
                        placeholder: "Please type the team's name here.",
                    },
                },
                {
                    name: "teamDescription",
                    type: "textarea",
                    required: true,
                    admin: {
                        placeholder: "Please type the team's description here.",
                    },
                },
                {
                    name: "execs",
                    type: "array",
                    fields: [
                        {
                            name: "name",
                            type: "text",
                            required: true,
                            admin: {
                                placeholder: "Please type the exec's name here.",
                            },
                        },
                        {
                            name: "role",
                            type: "text",
                            required: true,
                            admin: {
                                placeholder: "Please type the exec's role here. e.g Tech Director",
                            },
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
                            admin: {
                                placeholder:
                                    "Please type the exec's description here. e.g BE(Hons) - Software Engineering The University of Auckland",
                            },
                        },
                        {
                            name: "joined",
                            type: "text",
                            required: true,
                            admin: {
                                placeholder: "Please type the exec's join date here. In the format Joined Jan 2023",
                            },
                        },
                    ],
                },
            ],
        },
    ],
};

export default ExecsPage;
