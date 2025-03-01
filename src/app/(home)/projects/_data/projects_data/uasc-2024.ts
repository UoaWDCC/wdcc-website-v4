import type { Project } from "@/types/models";

export const uasc2024: Project = {
    name: { title: "Hut Bookings & Payments Web App", extended: "UASC" },
    description:
        "The University of Auckland Snowsports Club (UASC) aims to bring people together with a range of snow sport activities like skiing and snowboarding. This project allows members to log in, sign up, view upcoming events, register, pay and make booking for those events throughout the year.",
    icon: undefined,
    year: "2024",
    client: "",
    technologies: ["Mongodb", "Express", "React"],
    slug: "2024-UASC",
    brief: {
        description:
            "The UASC Hut Bookings & Payments Web App allows members to log in, sign up, view upcoming events, register, pay and make booking for those events throughout the year.",
        image: undefined,
    },
    team: {
        techlead: { name: "Benson Cho" },
        manager: { name: "Eddie Wang" },
        members: [
            { name: "Ray Xiao", role: "engineer" },
            { name: "Miguel Landingin", role: "engineer" },
            { name: "Raymond Luo", role: "engineer" },
            { name: "Kunal Bhaskar", role: "engineer" },
            { name: "Kartik Malik", role: "engineer" },
            { name: "Aziz Patel", role: "engineer" },
            { name: "Logan Bellingham", role: "engineer" },
            { name: "Jeffery Ji", role: "engineer" },
            { name: "Albert Sun", role: "engineer" },
            { name: "Campbell Wood", role: "engineer" },
        ],
    },
};
