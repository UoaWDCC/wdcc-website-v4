import React from "react";

import Card, { CardProps } from "./Card";

const info: CardProps[] = [
    {
        set: { color: "blue" },
        index: "01",
        title: "Projects",
        slug: "projects",
        description:
            "We provide opportunities for students to work in teams to deliver projects for real-world clients - gaining real industry expertise alongside motivated peers.",
    },
    {
        set: { color: "green" },
        index: "02",
        title: "Events",
        slug: "events",
        description:
            "We hold various social events, competitions, and mixers to bring Auckland’s tech students together - to yap, make friends, and develop their best network.",
    },
    {
        set: { color: "yellow" },
        index: "03",
        title: "Workshops",
        slug: "workshops",
        description:
            "We host a range of workshops to teach members the things they’ll need to thrive in our projects, covering plenty of crucial development, tech, and people skills.",
    },
];

const ThisIsWDCC = () => {
    return (
        <div className="mt-8 flex flex-col items-center justify-center text-xl text-blue-700">
            <h2 className="text-center text-5xl font-semibold">What do we do?</h2>
            <p className="w-[clamp(300px,100%,800px)] text-center">
                WDCC aims to bridge the gap between university knowledge and real-world industry practices. We run
                projects with real-world clients that solve real-world problems.
            </p>
            <div className="mt-16 flex gap-8">
                <Card {...info[0]} />
                <Card {...info[1]} />
                <Card {...info[2]} />
            </div>
        </div>
    );
};

export default ThisIsWDCC;
