"use server";

import { SLUG } from "@/libs/enums/slug";
import { getPayload } from "@/libs/payload";
import { Project } from "@/types/payload-types";

// Return single project by year and slug
export const getProject = async (year: string, slug: string): Promise<Project | undefined> => {
    const payload = await getPayload();
    const projects = await payload.find({
        collection: SLUG.PROJECTS,
        where: {
            and: [{ year: { equals: year } }, { slug: { equals: slug } }],
        },
        limit: 1,
    });

    return projects.docs[0];
};
