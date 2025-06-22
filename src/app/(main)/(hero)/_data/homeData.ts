import { HeroPageSchema } from "@/payload/globals/heropage/parseHeroPage";

export const HeroData: HeroPageSchema = {
    HERO: {
        title: "WEB DEVELOPMENT AND CONSULTING CLUB",
        blurb: "We connect tomorrow’s developers, designers, and tech project leaders with the real-world experience and opportunities that",
    },
    THIS_IS_WDCC: {
        description:
            "We’re a student club that aims to bridge the gap between university knowledge and real-world expertise. We run projects with real clients to solve challenging technical problems, and conduct a range of events to better equip tomorrow’s talent.",
        whatWeDo: {
            columns: [
                {
                    variant: { color: "blue" },
                    index: "01",
                    title: "Projects",
                    slug: "projects",
                    description:
                        "We provide opportunities for students to work in teams to deliver projects for real-world clients - gaining real industry expertise alongside motivated peers.",
                },
                {
                    variant: { color: "green" },
                    index: "02",
                    title: "Events",
                    slug: "events",
                    description:
                        "We hold various social events, competitions, and mixers to bring Auckland’s tech students together - to yap, make friends, and develop their best network.",
                },
                {
                    variant: { color: "yellow" },
                    index: "03",
                    title: "Workshops",
                    slug: "workshops",
                    description:
                        "We host a range of workshops to teach members the things they’ll need to thrive in our projects, covering plenty of crucial development, tech, and people skills.",
                },
            ],
        },
    },
    //could've and probably should've abstracted this and then imported it in here but oh well.
    SPONSOR_SECTION: {
        gold: {
            sponsors: [
                {
                    src: "/sponsors/partly_logo_black.svg",
                    alt: "partly",
                },
            ],
        },
        silver: {
            sponsors: [
                {
                    src: "/sponsors/sandfield_wordmark_black.webp",
                    alt: "sandfield",
                },
                {
                    src: "/sponsors/datacom_primary_logo_datacom_blue.webp",
                    alt: "datacom",
                },
                {
                    src: "/sponsors/ey_horizontal_black.webp",
                    alt: "ey",
                },
                {
                    src: "/sponsors/serato_black.webp",
                    alt: "serato",
                },
                {
                    src: "/sponsors/kpmg_blue_logo_logo_no_background.webp",
                    alt: "kpmg",
                },
                {
                    src: "/sponsors/janestreet_black.webp",
                    alt: "janestreet",
                },
            ],
        },
        tech: {
            sponsors: [
                {
                    src: "/sponsors/amazon_web_services_logo.webp",
                    alt: "amazon",
                },
            ],
        },
        community: {
            sponsors: [
                {
                    src: "/sponsors/tidy_charcoal_logo.svg",
                    alt: "tidy",
                },
                {
                    src: "/sponsors/grant_thornton_logo.webp",
                    alt: "grant thornton",
                },
                {
                    src: "/sponsors/beyond_essential_systems.webp",
                    alt: "BES",
                },
            ],
        },
    },
    SIGN_UP_CARD: {
        title: "Start your web dev journey here.",
        descriptionLineOne:
            "WDCC membership is totally free, and lets you access all kinds of member-exclusive messages, events, workshops, and more.",
        descriptionLineTwo: "Plus, at the start of the year, you can apply to join a ",
    },
};
