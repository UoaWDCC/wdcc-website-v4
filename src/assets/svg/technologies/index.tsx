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

interface TechnologySVGProps<T = any> {
    name: string;
    component: (props: T) => JSX.Element;
}

export const technologiesList = new Set([
    "astro",
    "aws",
    "css",
    "drizzleorm",
    "figma",
    "fly",
    "html",
    "javascript",
    "missing",
    "mongodb",
    "motion",
    "nextjs",
    "postgresql",
    "python",
    "react",
    "redis",
    "supabase",
    "tailwindcss",
    "twitch",
    "typescript",
    "vite",
    "vitest",
] as const);

export function getTechnologySvgWithName(name: string): TechnologySVGProps {
    switch (String(name).toLowerCase()) {
        case "astro":
            return { name: "Astro", component: Astro };
        case "aws":
            return { name: "AWS", component: AWS };
        case "css":
            return { name: "Css", component: Css };
        case "drizzleorm":
            return { name: "Drizzleorm", component: Drizzleorm };
        case "figma":
            return { name: "Figma", component: Figma };
        case "fly":
            return { name: "Fly", component: Fly };
        case "html":
            return { name: "Html", component: Html };
        case "javascript":
            return { name: "Javascript", component: Javascript };
        case "mongodb":
            return { name: "Mongodb", component: Mongodb };
        case "motion":
            return { name: "Motion", component: Motion };
        case "nextjs":
            return { name: "Nextjs", component: Nextjs };
        case "postgresql":
            return { name: "Postgresql", component: Postgresql };
        case "python":
            return { name: "Python", component: Python };
        case "redis":
            return { name: "Redis", component: Redis };
        case "supabase":
            return { name: "Supabase", component: Supabase };
        case "tailwindcss":
            return { name: "Tailwindcss", component: Tailwindcss };
        case "twitch":
            return { name: "Twitch", component: Twitch };
        case "typescript":
            return { name: "Typescript", component: Typescript };
        case "vite":
            return { name: "Vite", component: Vite };
        case "vitest":
            return { name: "Vitest", component: Vitest };
        case "react":
            return { name: "React", component: React };
        default:
            return { name: name, component: Missing };
    }
}
