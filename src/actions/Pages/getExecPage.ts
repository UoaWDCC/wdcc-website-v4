"use server";

import { getPayload } from "@/libs/payload";

export const getExecPage = async () => {
    const payload = await getPayload();
    const getExecPage = await payload.findGlobal({
        slug: "execs-page",
    });

    return getExecPage;
};
