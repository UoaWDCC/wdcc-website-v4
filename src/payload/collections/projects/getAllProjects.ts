"use server";

import { Project } from "@/payload/payload-types";
import { SLUG } from "@/utils/enums/slug";
import { getPayload } from "@/payload/mock";


// return all projects
export const getAllProjects = async (): Promise<Project[]> => {
    const payload = await getPayload();
    const projects = await payload.find({
        collection: SLUG.PROJECTS,
        pagination: false,
    });

    return projects.docs;
};