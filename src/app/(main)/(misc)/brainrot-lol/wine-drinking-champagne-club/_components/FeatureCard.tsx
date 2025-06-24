import React from "react";

export type FeatureCardType = {
    number: string;
    title: string;
    children: React.ReactNode;
    note?: string;
};

const FeatureCard = ({ number, title, children, note }: FeatureCardType) => {
    return (
        <div className="flex flex-col gap-4 px-16 py-24 text-white">
            <p className="text-md opacity-75">[{number}]</p>
            <p className="text-2xl">{title}</p>
            <div className="text-md flex flex-col gap-4 leading-[1.3]">{children}</div>
            <p className="text-xs opacity-50">{note}</p>
        </div>
    );
};

export default FeatureCard;
