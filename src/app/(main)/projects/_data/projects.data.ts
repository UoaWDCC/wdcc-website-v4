import { ProjectsPage } from "@/types/pages/ProjectsPage";

export const projectsCopy: ProjectsPage = {
    header: {
        title: `About Us`,
        content: `The Web Development and Consulting Club is Aotearoa New Zealand’s largest student technology club. Read more about our history, goals, and achievements - as well as the people that help make it all happen.`,
        buttons: [
            {
                label: `Meet the team`,
                href: `/about/team`,
            },
            {
                label: `Frequently asked questions`,
                href: `/faq`,
            },
        ],
    },
    infoSection: {
        main: "WDCC Projects are pro-bono web development projects for external student groups, charities, and other organisations, worked on by small teams of 10-12 WDCC members.",
        checkboxes: {
            title: "By participating in WDCC Projects, you get to:",
            checks: [
                "Work on a real product, used by real people.",
                "Gain practical experience alongside friends and peers.",
                "Experience an Agile development team.",
                "Learn industry best-practices in a comfortable environment.",
                "Boost your CV!",
                "astfasdf",
            ],
        },
    },
    operationSection: {
        title: "How we operate projects",
        content: "TBA",
    },
    rolesSection: {
        title: "Project Roles",
        roles: [
            {
                color: "blue" as const,
                title: "Developer",
                slug: "developer",
                description:
                    "WDCC Developers are the heart of every project team. You could work on anything - from adding a brand-new CMS through to keyframing in CSS.",
            },
            {
                color: "purple" as const,
                title: "Designer",
                slug: "designer",
                description:
                    "WDCC Designers are a step beyond theory. You'll navigate genuine design problems with a real-world project backed by a large technical team.",
            },
            {
                color: "yellow" as const,
                title: "Tech Lead",
                slug: "",
                description:
                    "WDCC Tech Leads get the senior dev experience (without the clout). Direct a large student team, and make your CV shine along the way.",
            },
            {
                color: "green" as const,
                title: "Project Manager",
                slug: "",
                description:
                    "WDCC PMs get to handle communication and Agile workflows in industry-like ways, but helped by friends instead of managers.",
            },
        ],
    },
    featuredSection: {
        title: "Featured past projects",
        cta: "View all past projects",
    },
};
