/**
 * NOTE: This script is entirely AI-generated and has not been fully reviewed. Read it before
 * running it, since it replaces files in the S3 bucket.
 *
 * Creates the resized copies (`imageSizes` in MediaCollection) for images uploaded before those
 * sizes existed. Payload only resizes at upload time, so each image is uploaded again as itself.
 *
 *   pnpm media:resize          every image that is missing a size
 *   pnpm media:resize 12 34    only these media IDs, even if they already have every size
 *
 * For each image it downloads the original from S3, keeps a copy in media-backup/, then updates
 * the document with that same file. Payload resizes it, and the S3 plugin replaces the original
 * and uploads the sizes. The ID and filename do not change, so nothing that uses the image does.
 *
 * The S3 plugin deletes the old file before it uploads the new one, so a failure in between
 * loses the original. Running the script again restores it from media-backup/. Delete that
 * folder once every image is done, or a later run will bring back files as they were today.
 *
 * It uses the database and bucket in .env. Outside production, Payload also syncs the database
 * schema when it connects, which is what adds the new `sizes_*` columns to the media table.
 */
import fs from "fs/promises";
import path from "path";
import { createLocalReq, getPayload } from "payload";
import config from "../payload.config";

const BACKUP_DIR = "media-backup";
// The types Payload can resize. Everything else, such as SVG, is left alone.
const RESIZABLE = ["image/jpeg", "image/png", "image/gif", "image/webp", "image/tiff", "image/avif"];

const ids = process.argv.slice(2).map(Number);

const payload = await getPayload({ config });
const req = await createLocalReq({}, payload);
// Some older uploads have an empty `alt`, which is now required, so Payload rejects any update to
// them. This run only adds sizes, so lift the check. It applies to this process only.
for (const field of payload.collections.media.config.fields) {
    if ("required" in field) {
        field.required = false;
    }
}

const { handlers, imageSizes } = payload.collections.media.config.upload;
// The S3 plugin adds the handler behind /api/media/file/:filename last. It reads straight from S3.
const download = handlers!.at(-1)!;

async function downloadOriginal(id: number, filename: string): Promise<Buffer> {
    const response = await download(req, { doc: { id }, params: { collection: "media", filename } });
    if (!response?.ok) {
        throw new Error(`Could not download ${filename} from S3 (status ${response?.status})`);
    }

    const data = Buffer.from(await response.arrayBuffer());
    await fs.writeFile(path.join(BACKUP_DIR, filename), data);
    return data;
}

await fs.mkdir(BACKUP_DIR, { recursive: true });

const { docs } = await payload.find({
    collection: "media",
    depth: 0,
    pagination: false,
    where: ids.length > 0 ? { id: { in: ids } } : {},
});

let resized = 0;
const failed: string[] = [];

for (const { id, filename, mimeType, sizes } of docs) {
    if (!filename || !mimeType || !RESIZABLE.includes(mimeType)) {
        continue;
    }

    const hasEverySize = imageSizes!.every(({ name }) => sizes?.[name as keyof typeof sizes]?.filename);
    if (hasEverySize && ids.length === 0) {
        continue;
    }

    try {
        // A backup left by an earlier run is the untouched original, so prefer it over S3.
        const data = await fs.readFile(path.join(BACKUP_DIR, filename)).catch(() => downloadOriginal(id, filename));

        await payload.update({
            collection: "media",
            id,
            data: {},
            file: { data, mimetype: mimeType, name: filename, size: data.length },
            // Keep the filename instead of saving the file as a renamed duplicate.
            overwriteExistingFiles: true,
        });

        resized++;
        console.log(`Resized ${id} ${filename}`);
    } catch (error) {
        failed.push(`${id} ${filename}`);
        console.error(`Failed ${id} ${filename}:`, error);
    }
}

console.log(`\nResized ${resized} of ${docs.length} media documents.`);
if (failed.length > 0) {
    console.log(`Failed, run again to retry:\n  ${failed.join("\n  ")}`);
}

// Payload keeps its database pool open, so the process would not end by itself.
process.exit(failed.length > 0 ? 1 : 0);
