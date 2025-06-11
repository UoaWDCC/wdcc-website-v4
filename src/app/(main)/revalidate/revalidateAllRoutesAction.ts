"use server";

import { revalidatePath } from "next/cache";

export async function revalidateAllRoutesAction() {
    revalidatePath("/", "layout");
    console.log("All routes revalidated at", new Date().toISOString());
}
