import type { CollectionConfig } from "payload";
import { cacheUploadedFile } from "../../hooks/cacheFiles";

/** Widths in pixels. Aim for twice the width an image is shown at, to stay sharp on dense screens. */
const IMAGE_WIDTHS = [
    ["small", 400],
    ["medium", 800],
    ["large", 1600],
] as const;

export const MediaCollection: CollectionConfig = {
    slug: "media",
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "alt",
            type: "text",
            defaultValue: "",
            required: true,
        },
    ],
    upload: {
        disableLocalStorage: true,
        modifyResponseHeaders: cacheUploadedFile,
        // Resized WebP copies made at upload, so pages can skip Vercel's image optimizer. Pick one
        // with `sizedUrl`. Files uploaded before a size existed need `pnpm media:resize`.
        imageSizes: IMAGE_WIDTHS.map(([name, width]) => ({
            name,
            width,
            // A narrower original is converted to WebP at its own width rather than stretched.
            withoutEnlargement: true,
            formatOptions: { format: "webp" },
        })),
    },
};
