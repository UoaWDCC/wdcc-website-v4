"use server";

import { getPayload } from "@/libs/payload";

export const getFaqPage = async () => {
    const payload = await getPayload();
    const getExecPage = await payload.findGlobal({
        slug: "faq-page",
    });

    return getExecPage;
};
