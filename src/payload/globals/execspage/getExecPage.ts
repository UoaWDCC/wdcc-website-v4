"use server";

import { ExecsPage } from "@/payload/payload-types";
import { getPayload } from "@/utils/payload";
import { mockExecPageData } from "./mockExecPageData";

export const getExecPage = async () => {
    let execPage: ExecsPage;
    if (process.env.MOCK_DATA === "true") {
        execPage = mockExecPageData;
    } else {
        const payload = await getPayload();
        execPage = await payload.findGlobal({
            slug: "execs-page",
        });
    }
    return execPage;
};