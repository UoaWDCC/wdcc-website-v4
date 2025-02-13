import type { Project } from "@/types/models";

export const nzpmc2024: Project = {
    name: { title: "NZPMC exam portal", extended: "NZPMC exam portal" },
    description: {
        short: "A whole paragraph describing what kind of project it is, including tech stack??\n\nYup.",
        extended: "pog",
    },
    icon: undefined,
    year: "2024",
    client: "",
    technologies: ["Astro", "Typescript"],
    slug: "2024-NZPMC",
    brief: {
        description: "A brief overview of the NZPMC exam portal and its purpose.",
        image: undefined,
    },
    team: {
        techlead: { name: "Youxiang Lei" },
        manager: { name: "Gurjot Bhullar" },
        members: [
            { name: "Tim Sinyakov", role: "engineer" },
            { name: "Jason Peng", role: "engineer" },
            { name: "Henry Ly", role: "engineer" },
            { name: "Abdul-Qudas Amidu", role: "engineer" },
            { name: "Alfie Na", role: "engineer" },
            { name: "Soham Kulkarni", role: "engineer" },
            { name: "Yoyo Chen", role: "engineer" },
            { name: "Kevin Cheung", role: "engineer" },
        ],
    },
};
