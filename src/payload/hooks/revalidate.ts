import { revalidatePath } from "next/cache";
import type { CollectionConfig, GlobalConfig } from "payload";

/**
 * The route group every public page sits under, from src/app/(main).
 *
 * `revalidatePath` addresses the route file structure rather than the URL, so paths passed
 * here are directory paths and include route groups — which never appear in a URL. Keep this
 * in step with the directory: rename or remove the group and purges stop matching, with no
 * error to say so.
 *
 * https://nextjs.org/docs/app/api-reference/functions/revalidatePath
 */
const ROUTE_GROUP = "/(main)";

/** Everything under src/app/(main), i.e. the whole public site. */
export const WHOLE_SITE = "";

/**
 * Purges cached pages so CMS edits appear without a redeploy.
 *
 * `path` is relative to the route group and names a directory under src/app/(main) — "/events",
 * or "" for the site. Nested route groups count as segments, so the home page is "/(hero)".
 *
 * "page" purges that one route. "layout" purges it and everything nested beneath it.
 */
export function purge(path: string, type: "page" | "layout"): void {
    try {
        revalidatePath(`${ROUTE_GROUP}${path}`, type);
    } catch {
        // Runs outside a request scope (CLI scripts, migrations), where there is no cache to purge.
    }
}

/** Runs `revalidate` whenever a document in this collection is written or deleted. */
export function withRevalidation(collection: CollectionConfig, revalidate: () => void): CollectionConfig {
    return {
        ...collection,
        hooks: {
            ...collection.hooks,
            afterChange: [...(collection.hooks?.afterChange ?? []), revalidate],
            afterDelete: [...(collection.hooks?.afterDelete ?? []), revalidate],
        },
    };
}

/** Runs `revalidate` whenever this global is written. */
export function withGlobalRevalidation(global: GlobalConfig, revalidate: () => void): GlobalConfig {
    return {
        ...global,
        hooks: {
            ...global.hooks,
            afterChange: [...(global.hooks?.afterChange ?? []), revalidate],
        },
    };
}
