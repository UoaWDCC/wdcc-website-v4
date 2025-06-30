"use server";

import { ProjectsPage } from "@/payload/payload-types";
import { getPayload } from "@/utils/payload";
import { mockProjectsPageData } from "./mockProjectsPageData";

export const getProjectsPage = async () => {
    let projectsPage: ProjectsPage;
    if (process.env.MOCK_DATA === "true") {
        projectsPage = mockProjectsPageData;
    } else {
        const payload = await getPayload();
        projectsPage = await payload.findGlobal({
            slug: "projects-page",
        });
    }
    return projectsPage;
};
