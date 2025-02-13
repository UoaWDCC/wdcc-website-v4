import type { Project } from "@/types/models";

export const youthOfOrakei2024: Project = {
    name: { title: "Youth of Ōrākei", extended: "" },
    description: {
        short: "I really wish we used a different CMS, I'm working overtime 😂",
    },
    icon: undefined,
    client: "Youth of Ōrākei",
    year: "2024",
    technologies: ["React", "TypeScript", "HTML", "CSS", "Prisma", "Fly", "Jira", "Vitest"],
    slug: "2024-youth-of-orakei",
    brief: {
        description:
            'The Youth of Ōrākei Website is an informational and promotional platform for the titular youth council, showcasing their projects, people, and goals. It allows the Youth of Ōrākei to solidify their online brand while having an easy way to notify their audience of upcoming events and opportunities. The team behind it is nicknamed "Team Houston," after the JavaScript framework Astro, which is used for its front-end-oriented design. The tech stack includes Astro, React, TypeScript, and the Notion API.',
        image: undefined,
    },
    team: {
        techlead: { name: "Chris Valenzuela" },
        manager: { name: "Yash Kumar" },
        members: [
            { name: "Emmanuel Araba", role: "engineer" },
            { name: "Anna Lin", role: "engineer" },
            { name: "Andrew Qiu", role: "designer" },
            { name: "Owen Li", role: "engineer" },
            { name: "Eleanor Crellin", role: "engineer" },
            { name: "Becky Cheng", role: "engineer" },
            { name: "Kimberley Zhu", role: "engineer" },
            { name: "Anton Garay", role: "engineer" },
        ],
    },
};
