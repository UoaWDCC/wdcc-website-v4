import { getPayload as getPayloadInstance } from "payload";
import { Media } from "@/payload/payload-types";
import configPromise from "../../../payload.config";

export async function getPayload(): ReturnType<typeof getPayloadInstance> {
    return getPayloadInstance({ config: await configPromise });
}

export type ImageSize = keyof NonNullable<Media["sizes"]>;

/**
 * The URL of a resized copy of an upload. Falls back to the original when that size does not
 * exist: SVGs are never resized, and older uploads have no sizes until `pnpm media:resize` runs.
 *
 * @param size Roughly twice the width the image is shown at. See MediaCollection for the widths.
 */
export function sizedUrl(media: Media | null | undefined, size: ImageSize): string | undefined {
    // 1. `media?.sizes?.[size]?.url` is the resized copy, e.g. /api/media/file/photo-400x267.webp.
    // 2. `media?.url` is the original file, used when that size does not exist.
    // 3. `undefined` when there is no image at all.
    return media?.sizes?.[size]?.url ?? media?.url ?? undefined;
}

/**
 * Type guard to restrict returned media fields from Payload to just the Media type.
 * Also adds a properly typed `src` field holding the URL of the requested size.
 *
 * @throws If the media object is a number, which is a sign that the media object is too deep.
 * @param media The media object from Payload.
 * @param size Which resized copy `src` points at.
 */
export function media(media: Media | number, size: ImageSize): Media & { src: string } {
    if (typeof media === "number") {
        // Probably should automatically requery for an actual media object here.
        // See https://payloadcms.com/community-help/discord/property-sizes-does-not-exist-on-type-number-media
        throw new Error("Detected a media object from Payload that exceeded the depth of the query.");
    }

    return { ...media, src: sizedUrl(media, size) ?? "" };
}
