import { hasKey } from "@/libs/utils";

import { Astro } from "./Astro";
import { AWS } from "./AWS";
import { Css } from "./Css";
import { Drizzleorm } from "./Drizzleorm";
import { Figma } from "./Figma";
import { Fly } from "./Fly";
import { Html } from "./Html";
import { Javascript } from "./Javascript";
import { Missing } from "./Missing";
import { Mongodb } from "./Mongodb";
import { Motion } from "./Motion";
import { Nextjs } from "./Nextjs";
import { Postgresql } from "./Postgresql";
import { Python } from "./Python";
import { React } from "./React";
import { Redis } from "./Redis";
import { Supabase } from "./Supabase";
import { Tailwindcss } from "./Tailwindcss";
import { Twitch } from "./Twitch";
import { Typescript } from "./Typescript";
import { Vite } from "./ViteJs";
import { Vitest } from "./Vitest";

interface TechnologySVGProps<T extends object = object> {
    name: string;
    component: (props: T) => JSX.Element;
}

type TechnologiesList = { [index: string]: TechnologySVGProps };

/** Sort in reverse order on FE to make MERN acroynm work :D */
export const technologiesList: TechnologiesList = {
    // Basic
    html: { name: "HTML", component: Html },
    css: { name: "CSS", component: Css },
    javascript: { name: "JavaScript", component: Javascript },
    typescript: { name: "TypeScript", component: Typescript },
    node: { name: "Node", component: Missing },

    // FE
    react: { name: "React", component: React },
    vue: { name: "Vue", component: Missing },
    vite: { name: "Vite", component: Vite },
    tailwindcss: { name: "TailwindCSS", component: Tailwindcss },

    // Backend
    express: { name: "Express", component: Missing },
    python: { name: "Python", component: Python },
    supabase: { name: "Supabase", component: Supabase },
    payload: { name: "PayloadCMS", component: Missing },
    notion: { name: "NotionCMS", component: Missing },

    // Full-Stack
    nextjs: { name: "Next", component: Nextjs },
    astro: { name: "Astro", component: Astro },

    // DB
    mongodb: { name: "MongoDB", component: Mongodb },
    firebase: { name: "Firebase", component: Missing },
    postgresql: { name: "Postgres", component: Postgresql },
    prisma: { name: "Prisma", component: Missing },
    drizzleorm: { name: "Drizzle", component: Drizzleorm },
    redis: { name: "Redis", component: Redis },

    // Devops
    aws: { name: "AWS", component: AWS },
    fly: { name: "Fly", component: Fly },

    // Misc
    figma: { name: "Figma", component: Figma },
    motion: { name: "Motion", component: Motion },
    nextauth: { name: "Next Auth", component: Missing },
    vitest: { name: "Vitest", component: Vitest },
    twitch: { name: "Twitch", component: Twitch }, // ???
} as const;

export function getTechnologySvgWithName(name: string): TechnologySVGProps {
    const key = name.toLowerCase();
    return hasKey(technologiesList, key) ? technologiesList[key] : { name: name, component: Missing };
}
