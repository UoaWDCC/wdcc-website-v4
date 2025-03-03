"use server";

import { revalidatePath } from "next/cache";

export async function revalidateAllRoutes() {
    revalidatePath("/");
    console.log("All routes revalidated at", new Date().toISOString());
}
