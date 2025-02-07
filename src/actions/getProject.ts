"use server";

import { CollectionSlug } from "payload";

import { SLUG } from "@/libs/enums/slug";
import { getPayload } from "@/libs/payload";

// return all projects
export const getProject = async (slug: string) => {
    const payload = await getPayload();
    const projects = await payload.find({
        collection: SLUG.PROJECTS as CollectionSlug,
        where: {
            slug: { equals: slug },
        },
        limit: 1,
    });

    return projects.docs[0];
};
