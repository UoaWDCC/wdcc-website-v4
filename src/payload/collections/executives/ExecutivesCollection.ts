import type { CollectionConfig } from "payload";
import { SLUG } from "@/utils/enums/slug";

export const ExecutivesCollection: CollectionConfig = {
    slug: SLUG.EXECUTIVES,
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: "name",
    },
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
};

export default ExecutivesCollection;
