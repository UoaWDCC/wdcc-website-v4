"use server";

import { getPayload } from "@/utils/payload";

export const getProjectsPage = async () => {
    const payload = await getPayload();
    const getProjectsPage = await payload.findGlobal({
        slug: "projects-page",
    });

    return getProjectsPage;
};
