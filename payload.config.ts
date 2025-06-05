// storage-adapter-import-placeholder
import path from "path";
import { fileURLToPath } from "url";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { HTMLConverterFeature, lexicalEditor, LinkFeature } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Events } from "./src/collections/Events";
import AboutPage from "./src/collections/globals/AboutPage";
import { ExecsPage } from "./src/collections/globals/ExecsPage";
import { FaqPage } from "./src/collections/globals/FaqPage";
import HeroPage from "./src/collections/globals/HeroPage";
import ProjectsPage from "./src/collections/globals/ProjectsPage";
import { Media } from "./src/collections/Media";
import { Partners } from "./src/collections/Partners";
import { Project } from "./src/collections/Projects";
import { TestSlug } from "./src/collections/TestSlug";
import { Users } from "./src/collections/Users";

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
    globals: [ExecsPage, FaqPage, AboutPage, ProjectsPage, HeroPage],
    editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, LinkFeature({}), HTMLConverterFeature({})],
    }),
    secret: process.env.PAYLOAD_SECRET ?? "",
    typescript: {
        outputFile: path.resolve(dirname, "payload-types.ts"),
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI ?? "",
        },
        migrationDir: "./src/migrations",
    }),
    upload: {
        limits: {
            fileSize: 5000000,
        },
    },
    plugins: [
        // https://payloadcms.com/docs/upload/storage-adapters
        s3Storage({
            collections: {
                media: {
                    prefix: "media",
                },
                partners: {
                    prefix: "partners",
                },
            },
            bucket: process.env.S3_BUCKET ?? "",
            config: {
                credentials: {
                    accessKeyId: process.env.S3_ACCESS_KEY_ID ?? "",
                    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY ?? "",
                },
                region: process.env.S3_REGION,
            },
        }),
    ],
    sharp,
});
