import React from "react";
import { getHeroPage } from "@/payload/globals/heropage/getHeroPage";
import InfoCard from "./WhatWeDoCard";

const ThisIsWDCC = async () => {
    const { data } = await getHeroPage();
    const { THIS_IS_WDCC } = data;
    const { whatWeDo, description } = THIS_IS_WDCC;

    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <h2 className="text-3xl leading-none font-bold">
                <span className="italic underline">This</span> is WDCC.
            </h2>
            <p className="text-center text-lg leading-tight text-blue-700 md:w-[80%]">{description}</p>
            <div className="flex flex-col gap-8 lg:flex-row">
                {whatWeDo.columns.map((column) => (
                    <InfoCard {...column} key={column.slug} />
                ))}
            </div>
        </div>
    );
};

export default ThisIsWDCC;
