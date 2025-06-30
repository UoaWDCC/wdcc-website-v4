"use server";

import { getPayload } from "@/utils/payload";

export const getExecPage = async () => {
    let execPage;
    if (process.env.MOCK_DATA === "true") {
        const { mockExecPageData } = await import("./mockExecPageData");
        execPage = mockExecPageData;
    } else {
        const payload = await getPayload();
        execPage = await payload.findGlobal({
            slug: "execs-page",
        });
        console.log(JSON.stringify(execPage, null, 2)); // Log the full result for mock data
    }
    return execPage;
};
