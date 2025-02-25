"use server";

import { getPayload } from "@/libs/payload";

// return Event
export const getExecPage = async () => {
    const payload = await getPayload();
    const getExecPage = await payload.findGlobal({
        slug: "execs-page",
    });

    return getExecPage;
};
