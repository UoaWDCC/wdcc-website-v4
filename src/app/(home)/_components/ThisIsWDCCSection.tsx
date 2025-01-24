import React from "react";

import { whatWeDoData } from "../_data/infoCard.data";
import InfoCard from "./WhatWeDoCard";

const ThisIsWDCC = () => {
    return (
        <div className="flex flex-col gap-10 items-center justify-center">
            <h2 className="text-3xl font-bold leading-none">
                <span className="underline italic">This</span> is WDCC.
            </h2>
            <p className="text-lg text-blue-700 leading-tight text-center md:w-[80%]">
                We’re a student club that aims to bridge the gap between university knowledge and real-world industry expertise. We run projects with real clients to solve challenging technical problems, and conduct a range of events to better equip tomorrow’s talent.
            </p>
            <div className="flex flex-col gap-8 lg:flex-row">
                {whatWeDoData.columns.map((column) => (
                    <InfoCard {...column} key={column.slug} />
                ))}
            </div>
        </div>
    );
};

export default ThisIsWDCC;
