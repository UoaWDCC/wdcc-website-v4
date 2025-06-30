"use server";

import { Project } from "@/payload/payload-types";
import { SLUG } from "@/utils/enums/slug";
import { getPayload } from "@/utils/payload";
import { mockProjectsData } from "./mockProjectsData";

// Return single project by year and slug
export const getProject = async (year: string, slug: string): Promise<Project | undefined> => {
    let project: Project | undefined;
    if (process.env.MOCK_DATA === "true") {
        project = mockProjectsData.docs.find((p) => p.year === year && p.slug === slug);
    } else {
        const payload = await getPayload();
        const projects = await payload.find({
            collection: SLUG.PROJECTS,
            where: {
                and: [{ year: { equals: year } }, { slug: { equals: slug } }],
            },
            limit: 1,
        });
        project = projects.docs[0];
    }
    return project;
};