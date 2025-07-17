// automatically generated with generate-index.js,
// last generated: 16/07/2025

export type RouteSection = {
    name: string;
    routes: Route[];
};

export type Route = { url: string; name: string };

export const LANDING_ROUTES: RouteSection = {
    name: "Landing Routes",
    routes: [
        {
            url: "/",
            name: "HeroPage",
        },
    ],
};

export const PROJECTS_ROUTES: RouteSection = {
    name: "Projects Routes",
    routes: [
        {
            url: "/projects/all/",
            name: "ProjectsPage",
        },
        {
            url: "/projects/",
            name: "ProjectsPage",
        },
        {
            url: "/projects/roles/designer/",
            name: "DesignerPage",
        },
        {
            url: "/projects/roles/developer/",
            name: "DeveloperPage",
        },
        {
            url: "/projects/roles/projectmanager/",
            name: "PMPage",
        },
        {
            url: "/projects/roles/techlead/",
            name: "TLPage",
        },
    ],
};

export const EVENTS_ROUTES: RouteSection = {
    name: "Events Routes",
    routes: [
        {
            url: "/events/all/",
            name: "EventsPage",
        },
        {
            url: "/events/",
            name: "EventsPage",
        },
    ],
};

export const ABOUT_ROUTES: RouteSection = {
    name: "About Routes",
    routes: [
        {
            url: "/about/faq/",
            name: "FaqPage",
        },
        {
            url: "/about/",
            name: "AboutPage",
        },
        {
            url: "/about/team/",
            name: "TeamPage",
        },
    ],
};

export const OTHER_ROUTES: RouteSection = {
    name: "Other Routes",
    routes: [
        {
            url: "/revalidate/",
            name: "RevalidatePage",
        },
        {
            url: "/socials/",
            name: "SocialsPage",
        },
    ],
};

export const BRAINROT_ROUTES: RouteSection = {
    name: "Brainrot Routes",
    routes: [
        {
            url: "/brainrot-lol/dating-compatibility-club/",
            name: "Home",
        },
        {
            url: "/brainrot-lol/fly-high-kot/",
            name: "Page",
        },
        {
            url: "/brainrot-lol/",
            name: "BrainrotLol",
        },
        {
            url: "/brainrot-lol/pricing-xdx-real/",
            name: "PricingPage",
        },
        {
            url: "/brainrot-lol/wine-drinking-champagne-club/",
            name: "PricingPage",
        },
    ],
};

export const TEST_ROUTES: RouteSection = {
    name: "Test Routes",
    routes: [
        {
            url: "/test/buttons/",
            name: "TestSponsorPage",
        },
        {
            url: "/test/header/",
            name: "TestPage",
        },
        {
            url: "/test/",
            name: "page",
        },
        {
            url: "/test/sponsors/",
            name: "TestSponsorPage",
        },
    ],
};

export const ROUTE_SYSTEM: RouteSection[] = [
    LANDING_ROUTES,
    PROJECTS_ROUTES,
    EVENTS_ROUTES,
    ABOUT_ROUTES,
    OTHER_ROUTES,
    BRAINROT_ROUTES,
    TEST_ROUTES,
];
