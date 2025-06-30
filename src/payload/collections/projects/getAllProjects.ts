"use server";

import { Project } from "@/payload/payload-types";
import { SLUG } from "@/utils/enums/slug";
import { getPayload } from "@/utils/payload";

// return all projects
export const getAllProjects = async (): Promise<Project[]> => {
    let projects: Project[];
    if (process.env.MOCK_DATA === "true") {
        const { mockProjectsData } = await import("./mockProjectsData");
        projects = mockProjectsData.docs;
    } else {
        const payload = await getPayload();
        const result = await payload.find({
            collection: SLUG.PROJECTS,
            pagination: false,
        });
        projects = result.docs;
    }
    return projects;
};
