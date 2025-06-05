"use server";

import { SLUG } from "@/libs/enums/slug";
import { getPayload } from "@/libs/payload";
import { Project } from "@/types/payload-types";

// return all projects
export const getAllProjects = async (): Promise<Project[]> => {
    const payload = await getPayload();
    const projects = await payload.find({
        collection: SLUG.PROJECTS,
        pagination: false,
    });

    return projects.docs;
};
