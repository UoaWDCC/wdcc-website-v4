/** 31 days. */
const CACHE_SECONDS = 2678400;

/**
 * Lets Vercel's CDN and browsers keep an uploaded file for 31 days.
 *
 * Payload sends no `Cache-Control` for uploads. Without one, every image on every page view
 * runs the file route, which queries the database and reads from S3. Only use this on
 * collections anyone can read, since the CDN serves the cached copy to everyone.
 *
 * A file edited in place (crop, focal point) keeps its filename, so the old version can be
 * served until this expires. A newly uploaded file gets a new filename and is unaffected.
 */
export function cacheUploadedFile({ headers }: { headers: Headers }): Headers {
    headers.set("Cache-Control", `public, max-age=${CACHE_SECONDS}, s-maxage=${CACHE_SECONDS}`);
    return headers;
}
