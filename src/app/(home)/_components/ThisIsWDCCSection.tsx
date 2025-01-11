import React from "react";

import SectionDescription from "@/components/section/SectionDescription";
import SectionHeader from "@/components/section/SectionHeader";

import { whatWeDoData } from "../_data/infoCard.data";
import InfoCard from "./WhatWeDoCard";

const ThisIsWDCC = () => {
    return (
        <div className="mt-24 flex flex-col items-center justify-center">
            <SectionHeader>What do we do?</SectionHeader>
            <SectionDescription>
                WDCC aims to bridge the gap between university knowledge and real-world industry practices. We run
                projects with real-world clients that solve real-world problems.
            </SectionDescription>
            <div className="mt-16 flex flex-col gap-8 lg:flex-row">
                {whatWeDoData.columns.map((column) => (
                    <InfoCard {...column} key={column.slug} />
                ))}
            </div>
        </div>
    );
};

export default ThisIsWDCC;
