import { WhatWeDoCardProps } from "../_components/WhatWeDoCard";

type WhatWeDoData = { columns: WhatWeDoCardProps[] };

export const whatWeDoData: WhatWeDoData = {
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
            slug: "events#workshops",
            description:
                "We host a range of workshops to teach members the things they’ll need to thrive in our projects, covering plenty of crucial development, tech, and people skills.",
        },
    ],
};
