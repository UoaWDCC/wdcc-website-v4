// storage-adapter-import-placeholder
import path from "path";
import { fileURLToPath } from "url";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { HTMLConverterFeature, lexicalEditor, LinkFeature } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Events } from "./collections/Events";
import { ExecsPage } from "./collections/ExecsPage";
import { Media } from "./collections/Media";
import { Partners } from "./collections/Partners";
import { Project } from "./collections/Projects";
import { TestSlug } from "./collections/TestSlug";
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
    collections: [Users, Media, Events, Project, TestSlug, Partners],
    globals: [ExecsPage],
    editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, LinkFeature({}), HTMLConverterFeature({})],
    }),
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
    upload: {
        limits: {
            fileSize: 5000000,
        },
    },
    plugins: [
        s3Storage({
            collections: {
                media: {
                    prefix: "media",
                },
                partners: {
                    prefix: "partners",
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
