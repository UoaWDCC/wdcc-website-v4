import { postgresAdapter } from "@payloadcms/db-postgres";
import { HTMLConverterFeature, LinkFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";
import { EventsCollection } from "./src/payload/collections/events/EventsCollection";
import { ExecTeamCollection } from "./src/payload/collections/executives/ExecTeamCollection";
import { ExecutivesCollection } from "./src/payload/collections/executives/ExecutivesCollection";
import { MediaCollection } from "./src/payload/collections/misc/MediaCollection";
import { PartnersCollection } from "./src/payload/collections/misc/PartnersCollection";
import { UsersCollection } from "./src/payload/collections/misc/UsersCollection";
import { ProjectsCollection } from "./src/payload/collections/projects/ProjectsCollection";
import AboutPageGlobal from "./src/payload/globals/aboutpage/AboutPageGlobal";
import { ExecsPageGlobal } from "./src/payload/globals/execspage/ExecsPageGlobal";
import { FaqPageGlobal } from "./src/payload/globals/faqpage/FaqPageGlobal";
import HeroPageGlobal from "./src/payload/globals/heropage/HeroPageGlobal";
import ProjectsPageGlobal from "./src/payload/globals/projectspage/ProjectsPageGlobal";
import { WHOLE_SITE, purge, withGlobalRevalidation, withRevalidation } from "./src/payload/hooks/revalidate";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    admin: {
        user: UsersCollection.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },
    // Which pages each piece of content affects. Media and partners are embedded almost
    // everywhere and Payload keeps no reverse index for relations, so they can only purge
    // the lot. UsersCollection is left alone — it holds no public content, and auth writes
    // on every login would purge the site for nothing.
    collections: [
        UsersCollection,
        withRevalidation(MediaCollection, () => purge(WHOLE_SITE, "layout")),
        withRevalidation(EventsCollection, () => purge("/events", "layout")),
        withRevalidation(ProjectsCollection, () => purge("/projects", "layout")),
        withRevalidation(PartnersCollection, () => purge(WHOLE_SITE, "layout")),
        withRevalidation(ExecutivesCollection, () => purge("/about/team", "layout")),
        withRevalidation(ExecTeamCollection, () => purge("/about/team", "layout")),
    ],
    globals: [
        withGlobalRevalidation(ExecsPageGlobal, () => purge("/about/team", "layout")),
        withGlobalRevalidation(FaqPageGlobal, () => purge("/about/faq", "page")),
        withGlobalRevalidation(AboutPageGlobal, () => purge("/about", "page")),
        withGlobalRevalidation(ProjectsPageGlobal, () => purge("/projects", "page")),
        // The home page is src/app/(main)/(hero)/page.tsx.
        withGlobalRevalidation(HeroPageGlobal, () => purge("/(hero)", "page")),
    ],
    editor: lexicalEditor({
        // TODO ASHTON

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
