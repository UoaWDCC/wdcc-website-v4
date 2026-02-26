import type { CollectionConfig } from "payload";
import { SLUG } from "@/utils/enums/slug";

export const ExecYearsCollection: CollectionConfig = {
    slug: SLUG.EXEC_YEARS,
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: "slug",
    },
    fields: [
        {
            name: "year",
            type: "text",
            required: true,
            admin: {
                placeholder: "Please type the year here. e.g (2026)",
            },
        },
        {
            name: "slug",
            type: "text",
            required: true,
            unique: true,
            admin: {
                placeholder: "Please type the year slug here. e.g (2026)",
            },
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
                    type: "relationship",
                    relationTo: SLUG.EXECUTIVES,
                    hasMany: true,
                    required: true,
                },
            ],
        },
    ],
};

export default ExecYearsCollection;