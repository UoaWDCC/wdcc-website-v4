import { postgresAdapter } from "@payloadcms/db-postgres";
import { HTMLConverterFeature, LinkFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";
import { EventsCollection } from "./src/payload/collections/events/EventsCollection";
import { MediaCollection } from "./src/payload/collections/misc/MediaCollection";
import { PartnersCollection } from "./src/payload/collections/misc/PartnersCollection";
import { UsersCollection } from "./src/payload/collections/misc/UsersCollection";
import { ProjectsCollection } from "./src/payload/collections/projects/ProjectsCollection";
import AboutPageGlobal from "./src/payload/globals/aboutpage/AboutPageGlobal";
import { ExecsPageGlobal } from "./src/payload/globals/execspage/ExecsPageGlobal";
import { FaqPageGlobal } from "./src/payload/globals/faqpage/FaqPageGlobal";
import HeroPageGlobal from "./src/payload/globals/heropage/HeroPageGlobal";
import ProjectsPageGlobal from "./src/payload/globals/projectspage/ProjectsPageGlobal";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    admin: {
        user: UsersCollection.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },
    collections: [UsersCollection, MediaCollection, EventsCollection, ProjectsCollection, PartnersCollection],
    globals: [ExecsPageGlobal, FaqPageGlobal, AboutPageGlobal, ProjectsPageGlobal, HeroPageGlobal],
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
