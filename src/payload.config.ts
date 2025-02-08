// storage-adapter-import-placeholder
import path from "path";
import { fileURLToPath } from "url";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Events } from "./collections/Events";
import { Media } from "./collections/Media";
import { Projects } from "./collections/Projects";
import { Users } from "./collections/Users";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },
    collections: [Users, Media, Events, Projects],
    editor: lexicalEditor(),
    secret: process.env.PAYLOAD_SECRET || "",
    typescript: {
        outputFile: path.resolve(dirname, "payload-types.ts"),
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI || "",
        },
        migrationDir: "./src/migrations",
    }),
    plugins: [
        s3Storage({
            collections: {
                media: {
                    generateFileURL: ({ filename }) => {
                        return `https://${process.env.S3_BUCKET}.s3.${process.env.S3_REGION}.amazonaws.com/${filename}`;
                    },
                },
            },
            bucket: process.env.S3_BUCKET || "",
            config: {
                credentials: {
                    accessKeyId: process.env.S3_ACCESS_KEY_ID || "",
                    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "",
                },
                region: process.env.S3_REGION,
            },
        }),
    ],

    sharp,
});
