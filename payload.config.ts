import { postgresAdapter } from "@payloadcms/db-postgres";
import { HTMLConverterFeature, LinkFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";
import { Events } from "./src/payload/collections/events/Events";
import { Media } from "./src/payload/collections/misc/Media";
import { TestSlug } from "./src/payload/collections/misc/TestSlug";
import { Users } from "./src/payload/collections/misc/Users";
import { Partners } from "./src/payload/collections/partners/Partners";
import { Project } from "./src/payload/collections/projects/Projects";
import AboutPage from "./src/payload/globals/aboutpage/AboutPage";
import { ExecsPage } from "./src/payload/globals/execspage/ExecsPage";
import { FaqPage } from "./src/payload/globals/faqpage/FaqPage";
import HeroPage from "./src/payload/globals/heropage/HeroPage";
import ProjectsPage from "./src/payload/globals/projectspage/ProjectsPage";

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
        // TODO ASHTON
        // eslint-disable-next-line @typescript-eslint/no-deprecated
        features: ({ defaultFeatures }) => [...defaultFeatures, LinkFeature({}), HTMLConverterFeature({})],
    }),
    secret: process.env.PAYLOAD_SECRET ?? "",
    typescript: {
        outputFile: path.resolve(dirname, "src/payload/payload-types.ts"),
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
