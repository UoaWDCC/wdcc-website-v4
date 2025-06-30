"use server";

import { getPayload } from "@/utils/payload";

export const getProjectsPage = async () => {
    let projectsPage;
    if (process.env.MOCK_DATA === "true") {
        const { mockProjectsPageData } = await import("./mockProjectsPageData");
        projectsPage = mockProjectsPageData;
    } else {
        const payload = await getPayload();
        projectsPage = await payload.findGlobal({
            slug: "projects-page",
        });
        console.log(JSON.stringify(projectsPage, null, 2)); // Log the full result for mock data
    }
    return projectsPage;
};
