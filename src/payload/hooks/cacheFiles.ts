import { IMAGE_CACHE_SECONDS } from "../../utils/consts";

/**
 * Lets Vercel's CDN, its image optimizer and browsers keep an uploaded file for 31 days.
 *
 * Payload sends no `Cache-Control` for uploads. Without one, every request runs the file route,
 * and the optimizer's cache lifetime rests on `images.minimumCacheTTL` alone. Only use this on
 * collections anyone can read, since the CDN serves the cached copy to everyone.
 *
 * A file edited in place (crop, focal point) keeps its filename, so the old version can be
 * served until this expires. A newly uploaded file gets a new filename and is unaffected.
 */
export function cacheUploadedFile({ headers }: { headers: Headers }): Headers {
    headers.set("Cache-Control", `public, max-age=${IMAGE_CACHE_SECONDS}, s-maxage=${IMAGE_CACHE_SECONDS}`);
    return headers;
}
