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

export function getTechnologySvg(tech: string) {
    switch (tech) {
        case "Astro":
            return Astro;
        case "AWS":
            return AWS;
        case "Css":
            return Css;
        case "Drizzleorm":
            return Drizzleorm;
        case "Figma":
            return Figma;
        case "Fly":
            return Fly;
        case "Html":
            return Html;
        case "Javascript":
            return Javascript;
        case "Mongodb":
            return Mongodb;
        case "Motion":
            return Motion;
        case "Nextjs":
            return Nextjs;
        case "Postgresql":
            return Postgresql;
        case "Python":
            return Python;
        case "Redis":
            return Redis;
        case "Supabase":
            return Supabase;
        case "Tailwindcss":
            return Tailwindcss;
        case "Twitch":
            return Twitch;
        case "Typescript":
            return Typescript;
        case "Vite":
            return Vite;
        case "Vitest":
            return Vitest;
        case "React":
            return React;
        default:
            return Missing;
    }
}
