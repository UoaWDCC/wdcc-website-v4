import React from "react";
import InfoCard, { WhatWeDoCardProps } from "./WhatWeDoCard";

type ThisIsWDCCProps = {
    ThisIsWDCC: {
        description: string;
        whatWeDo: {
            columns: WhatWeDoCardProps[];
        };
    };
};
const ThisIsWDCC = ({ ThisIsWDCC }: ThisIsWDCCProps) => {
    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <h2 className="text-3xl leading-none font-bold">
                <span className="italic underline">This</span> is WDCC.
            </h2>
            <p className="text-center text-lg leading-tight text-blue-700 md:w-[80%]">{ThisIsWDCC.description}</p>
            <div className="flex flex-col gap-8 lg:flex-row">
                {ThisIsWDCC.whatWeDo.columns.map((column) => (
                    <InfoCard {...column} key={column.slug} />
                ))}
            </div>
        </div>
    );
};

export default ThisIsWDCC;
