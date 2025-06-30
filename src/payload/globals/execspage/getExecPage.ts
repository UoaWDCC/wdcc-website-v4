"use server";

import { ExecsPage } from "@/payload/payload-types";
import { getPayload } from "@/utils/payload";

export const getExecPage = async () => {
    let execPage: ExecsPage;
    if (process.env.MOCK_DATA === "true") {
        const { mockExecPageData } = await import("./mockExecPageData");
        execPage = mockExecPageData;
    } else {
        const payload = await getPayload();
        execPage = await payload.findGlobal({
            slug: "execs-page",
        });
    }
    return execPage;
};