"use server";

import { Project } from "@/types/payload-types";
import { SLUG } from "@/utils/enums/slug";
import { getPayload } from "@/utils/payload";

// return all projects
export const getAllProjects = async (): Promise<Project[]> => {
    const payload = await getPayload();
    const projects = await payload.find({
        collection: SLUG.PROJECTS,
        pagination: false,
    });

    return projects.docs;
};
