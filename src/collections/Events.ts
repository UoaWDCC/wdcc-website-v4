import type { CollectionConfig } from "payload";

import { SLUG } from "@/libs/consts/slug";

export const Events: CollectionConfig = {
    slug: SLUG.EVENTS,
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "alt",
            type: "text",
            required: true,
        },
    ],
    endpoints: [
        {
            method: "get",
            path: "/api/events/:id",

            handler: async (req) => {
                return Response.json({
                    test: req,
                });
            },
        },
    ],
    upload: true,
};
