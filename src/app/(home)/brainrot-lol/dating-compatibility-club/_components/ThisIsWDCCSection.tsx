import React from "react";

import { whatWeDoData } from "../_data/infoCard.data";
import InfoCard from "./WhatWeDoCard";

const ThisIsWDCC = () => {
    return (
        <div className="flex flex-col gap-16 items-center justify-center">
            <div className="flex flex-col gap-8 items-center justify-center">
                <h2 className="text-3xl font-bold leading-none text-pink-700">
                    <span className="underline italic">This</span> is WDCC.
                </h2>
                <p className="text-lg leading-tight italic font-semibold text-center md:w-[80%]">
                    Graph theory helped you find the shortest path between nodes, but can you find the shortest path to
                    their heart?
                </p>
                <p className="text-lg leading-tight text-center md:w-[80%]">
                    WDCC is a student club that aims to bridge the gap between university clubs and real-world dating
                    expertise. We run events with real students to help you find that spark.
                </p>
            </div>
            <div className="flex flex-col gap-8 lg:flex-row">
                {whatWeDoData.columns.map((column) => (
                    <InfoCard {...column} key={column.slug} />
                ))}
            </div>
        </div>
    );
};

export default ThisIsWDCC;
