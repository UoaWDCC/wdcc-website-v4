"use server";

import { getPayload } from "@/payload/mock";


export const getExecPage = async () => {
    const payload = await getPayload();
    const getExecPage = await payload.findGlobal({
        slug: "execs-page",
    });

    return getExecPage;
};