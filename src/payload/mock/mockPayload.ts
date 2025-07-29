import { BasePayload } from "payload";
import G_about from "./data/about.global.json";
import C_events from "./data/events.collections.json";
import G_exec from "./data/exec.global.json";
import G_faq from "./data/faq.global.json";
import G_hero from "./data/hero.global.json";
import G_project from "./data/project.global.json";
import C_projects from "./data/projects.collections.json";

export async function getMockPayload(): Promise<BasePayload> {
    const payload = {} as BasePayload;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload.findGlobal = (options): any => {
        const slug = options.slug;

        switch (slug) {
            case "execs-page":
                return Promise.resolve(G_exec);
            case "about-page":
                return Promise.resolve(G_about);
            case "faq-page":
                return Promise.resolve(G_faq);
            case "hero-page":
                return Promise.resolve(G_hero);
            case "projects-page":
                return Promise.resolve(G_project);
            default:
                throw new Error(`Unhandled slug: ${String(slug)}`);
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload.find = (options): any => {
        const collection = options.collection;

        const queryFn = (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data: any[],
            options: { limit?: number }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ): { docs: any } => {
            if (options.limit) {
                data = data.slice(0, options.limit);
            }

            // TODO: fix when where arg is passed

            return { docs: data };
        };

        switch (collection) {
            case "event":
                return Promise.resolve(queryFn(C_events, options));
            case "project":
                return Promise.resolve(queryFn(C_projects, options));
            default:
                throw new Error(`Unhandled slug: ${String(collection)}`);
        }
    };

    return payload;
}
