import React from "react";
import { whatWeDoData } from "../_data/infoCard.data";
import InfoCard from "./WhatWeDoCard";

// IMPORTANT This is for the DATING BRAINROT page - not the actual production landing!

const ThisIsWDCC = () => {
    return (
        <div className="flex w-full flex-col justify-center gap-16">
            <div className="flex w-[80%] flex-col gap-8">
                <h2 className="text-3xl leading-none font-bold text-[#E70068]">Find your best pair.</h2>
                <p className="text-lg leading-tight font-semibold italic">
                    Graph theory helped you find the shortest path between nodes, but can you find the shortest path to
                    their heart?
                </p>
                <p className="text-lg leading-tight">
                    WDCC is a student club that aims to bridge the gap between university clubs and real-world dating
                    expertise. We run events with real students to help you find that spark.
                </p>
            </div>
            <div className="flex w-full flex-col justify-between gap-8 lg:flex-row">
                {whatWeDoData.columns.map((column, i) => (
                    <InfoCard {...column} key={i} />
                ))}
            </div>
        </div>
    );
};

export default ThisIsWDCC;
