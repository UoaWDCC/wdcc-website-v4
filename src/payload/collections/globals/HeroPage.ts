import type { GlobalConfig } from "payload";

export const HeroPage: GlobalConfig = {
    slug: "hero-page",
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "hero",
            type: "group",
            fields: [
                { name: "title", type: "text", required: true },
                { name: "blurb", type: "textarea", required: true },
            ],
        },
        {
            name: "thisIsWDCC",
            type: "group",
            fields: [
                { name: "description", type: "textarea", required: true },
                {
                    name: "whatWeDo",
                    type: "array",
                    fields: [
                        { name: "index", type: "text", required: true },
                        { name: "title", type: "text", required: true },
                        { name: "slug", type: "text", required: true },
                        { name: "description", type: "textarea", required: true },
                        {
                            name: "variant",
                            type: "select",
                            required: true,
                            options: ["blue", "green", "yellow"],
                        },
                    ],
                },
            ],
        },
        {
            name: "sponsorSection",
            type: "group",
            fields: [
                {
                    name: "gold",
                    type: "relationship",
                    relationTo: "partners",
                    hasMany: true,
                },
                {
                    name: "silver",
                    type: "relationship",
                    relationTo: "partners",
                    hasMany: true,
                },
                {
                    name: "tech",
                    type: "relationship",
                    relationTo: "partners",
                    hasMany: true,
                },
                {
                    name: "community",
                    type: "relationship",
                    relationTo: "partners",
                    hasMany: true,
                },
            ],
        },
        {
            name: "signUpCard",
            type: "group",
            fields: [
                { name: "title", type: "text", required: true },
                { name: "descriptionLineOne", type: "textarea", required: true },
                { name: "descriptionLineTwo", type: "textarea", required: true },
            ],
        },
    ],
};

export default HeroPage;
