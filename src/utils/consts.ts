/**
 * How long optimized images and uploaded files may be cached: 31 days, the value Vercel documents.
 * Shared by `images.minimumCacheTTL` in next.config.ts and the `Cache-Control` on uploaded files.
 */
export const IMAGE_CACHE_SECONDS = 2678400;
