"use server";

import { CollectionSlug } from "payload";

import { SLUG } from "@/libs/enums/slug";
import { getPayload } from "@/libs/payload";

// return all projects
export const getAllProjects = async () => {
    const payload = await getPayload();
    const projects = await payload.find({
        collection: SLUG.PROJECTS as CollectionSlug,
    });

    return projects.docs;
};
