"use server";

import { revalidatePath } from "next/cache";

// eslint-disable-next-line @typescript-eslint/require-await
export async function revalidateAllRoutes() {
    revalidatePath("/", "layout");
    console.log("All routes revalidated at", new Date().toISOString());
}
