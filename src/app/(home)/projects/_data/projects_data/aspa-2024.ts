import type { Project } from "@/types/models";

export const aspa2024: Project = {
    name: { title: "ASPA registration website", extended: "ASPA registration website" },
    description: "A whole paragraph describing what kind of project it is, including tech stack??\n\nYup.",
    icon: undefined,
    client: "err",
    year: "2024",
    technologies: ["Astro", "Typescript"],
    slug: "2024-ASPA",
    brief: {
        description: "A brief overview of the ASPA registration website and its purpose.",
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
