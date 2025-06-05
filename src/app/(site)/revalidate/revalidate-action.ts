"use server";

import { revalidatePath } from "next/cache";

export function revalidateAllRoutes() {
    revalidatePath("/", "layout");
    console.log("All routes revalidated at", new Date().toISOString());
}
