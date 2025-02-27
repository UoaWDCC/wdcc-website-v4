import React from "react";

import { whatWeDoData } from "../_data/infoCard.data";
import InfoCard from "./WhatWeDoCard";

// IMPORTANT This is for the DATING BRAINROT page - not the actual production landing!


const ThisIsWDCC = () => {
    return (
        <div className="w-full flex flex-col gap-16 justify-center">
            <div className="flex flex-col gap-8 w-[80%]">
                <h2 className="text-3xl font-bold leading-none text-[#E70068]">
                    Find your best pair.
                </h2>
                <p className="text-lg leading-tight italic font-semibold">
                    Graph theory helped you find the shortest path between nodes, but can you find the shortest path to
                    their heart?
                </p>
                <p className="text-lg leading-tight">
                    WDCC is a student club that aims to bridge the gap between university clubs and real-world dating
                    expertise. We run events with real students to help you find that spark.
                </p>
            </div>
            <div className="w-full flex flex-col gap-8 justify-between lg:flex-row">
                {whatWeDoData.columns.map((column) => (
                    <InfoCard {...column} key={column.slug} />
                ))}
            </div>
        </div>
    );
};

export default ThisIsWDCC;
