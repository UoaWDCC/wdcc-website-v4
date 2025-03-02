import type { Project } from "@/types/models";

export const aspa2024: Project = {
    name: { title: "ASPA registration website", extended: "ASPA registration website" },
    description:
        "The ASPA registration website allows members to log in, sign up, view upcoming events, register, and pay for pool events throughout the year.",
    icon: undefined,
    client: "Auckland Student Pool Association",
    year: "2024",
    technologies: ["Nextjs", "Typescript"],
    slug: "2024-ASPA",
    brief: {
        description:
            "The ASPA registration website allows members to log in, sign up, view upcoming events, register, and pay for pool events throughout the year. The admin panel allows admins to manage members, create events, see registrations for events, and check payments for events.",
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
