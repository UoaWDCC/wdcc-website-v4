"use server";

import { Project } from "@/payload/payload-types";
import { SLUG } from "@/utils/enums/slug";
import { getPayload } from "@/utils/payload";

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
