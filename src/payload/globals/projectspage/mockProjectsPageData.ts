import { ProjectsPage } from "@/payload/payload-types";

export const mockProjectsPageData: ProjectsPage = {
    id: 1,
    header: {
        title: "About Us",
        content:
            "The Web Development and Consulting Club is Aotearoa New Zealand’s largest student technology club. Read more about our history, goals, and achievements - as well as the people that help make it all happen.",
        buttons: [
            {
                id: "67c2b5273b29733fe0ed431e",
                text: "Meet the team",
                link: "/about/team",
            },
            {
                id: "67c2b534f31fc4028bea3d8b",
                text: "Frequently asked questions",
                link: "/faq",
            },
        ],
    },
    infoSection: {
        main: "WDCC Projects are pro-bono web development projects for external student groups, charities, and other organisations, worked on by small teams of 10-12 WDCC members.",
        checkboxes: {
            title: "By participating in WDCC Projects, you get to:",
            checks: [
                {
                    id: "67c2b5473b29733fe0ed4321",
                    text: "Work on a real product, used by real people.",
                },
                {
                    id: "67c2b5493b29733fe0ed4322",
                    text: "Gain practical experience alongside friends and peers.",
                },
                {
                    id: "67c2b54a3b29733fe0ed4323",
                    text: "Experience an Agile development team.",
                },
                {
                    id: "67c2b5603b29733fe0ed4324",
                    text: "Learn industry best-practices in a comfortable environment.",
                },
                {
                    id: "67c2b5643b29733fe0ed4325",
                    text: "Boost your CV!",
                },
            ],
        },
    },
    operationSection: {
        title: "How we operate projects",
        content:
            "[ THERE WILL BE A GRAPHIC HERE (and in the cards below) - PENDING WHILE I ADDRESS SOME VARIOUS ISSUES LOL (ask Andrew, ETA today Sunday) ]",
    },
    rolesSection: {
        title: "Project Roles",
        roles: [
            {
                id: "67c2b5753b29733fe0ed4327",
                color: "blue",
                title: "Developer",
                slug: "developer",
                description:
                    "WDCC Developers are the heart of every project team. You could work on anything - from adding a brand-new CMS through to keyframing in CSS.",
            },
            {
                id: "67c2b5783b29733fe0ed4328",
                color: "purple",
                title: "Designer",
                slug: "designer",
                description:
                    "WDCC Designers are a step beyond theory. You'll navigate genuine design problems with a real-world project backed by a large technical team.",
            },
            {
                id: "67c2b5c73b29733fe0ed432a",
                color: "green",
                title: "Project Manager",
                slug: "projectmanager",
                description:
                    "WDCC PMs drive team collaboration and lead our industry-inspired Agile sprints as your friend, not your boss.",
            },
            {
                id: "67c2b5983b29733fe0ed4329",
                color: "yellow",
                title: "Tech Lead",
                slug: "techlead",
                description:
                    "WDCC Tech Leads are the architects and mentors of project teams. Champion a vision, and bring it to life alongside your team.",
            },
        ],
    },
    featuredSection: {
        title: "Featured past projects",
        cta: "View all past projects",
    },
    updatedAt: "2025-03-09T09:57:27.106Z",
    createdAt: "2025-03-01T07:23:19.379Z",
};
