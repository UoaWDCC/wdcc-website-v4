import { BasePayload, getPayload as getPayloadInstance } from "payload";
import { Media } from "@/payload/payload-types";
import configPromise from "../../../payload.config";
import { getMockPayload } from "./mockPayload";

export async function getPayload(): Promise<BasePayload> {
    if (process.env.NODE_ENV !== "production" && process.env.USE_MOCK_PAYLOAD === "true") return getMockPayload();

    return getPayloadInstance({ config: await configPromise });
}

/**
 * Type guard to restrict returned media fields from Payload to just the Media type.
 * Also adds a properly typed `src` field that mirrors the media.url field.
 *
 * @throws If the media object is a number, which is a sign that the media object is too deep.
 * @param media The media object from Payload.
 */
export function media(media: Media | number): Media & { src: string } {
    if (process.env.NODE_ENV !== "production" && process.env.USE_MOCK_PAYLOAD === "true") {
        return {
            id: 1,
            alt: "",
            updatedAt: "",
            createdAt: "",
            url: "/",
            src: "/",
        };
    }

    if (typeof media === "number") {
        // Probably should automatically requery for an actual media object here.
        // See https://payloadcms.com/community-help/discord/property-sizes-does-not-exist-on-type-number-media
        throw new Error("Detected a media object from Payload that exceeded the depth of the query.");
    }

    return { ...media, src: media.url ?? "" };
}
