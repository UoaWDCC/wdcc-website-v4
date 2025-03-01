import type { Project } from "@/types/models";

export const uabc2024: Project = {
    name: { title: "Event Registration & Payments Web App", extended: "UABC" },
    description:
        "The Badminton Club hosts paid badminton sessions for its club members, of which there are generally 4 sessions per week, each with a maximum attendance that is often reached quite quickly. This project involves making a web application that supports badminton club members from selecting the weekday sessions that they want to pay for and sign up to and allow them to pay for these sessions online.",
    icon: undefined,
    year: "2024",
    client: "",
    technologies: ["Mongodb", "Express", "React"],
    slug: "2024-UABC",
    brief: {
        description:
            "The UABC Event Registration & Payments Web App allows members to select the weekday sessions that they want to pay for and sign up to and pay for these sessions online.",
        image: undefined,
    },
    team: {
        techlead: { name: "David Zhu" },
        manager: { name: "Daniel Yang" },
        members: [
            { name: "Annabelle Ding", role: "engineer" },
            { name: "Dennis Hu", role: "engineer" },
            { name: "Eric Zheng", role: "engineer" },
            { name: "Chanasit Jitsawatpaiboon", role: "engineer" },
            { name: "Liam Parker", role: "engineer" },
            { name: "Kimia Varasteh", role: "engineer" },
        ],
    },
};
