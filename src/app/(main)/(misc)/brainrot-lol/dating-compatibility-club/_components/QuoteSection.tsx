import React from "react";

// IMPORTANT This is for the DATING BRAINROT page - not the actual production landing!

const DatingQuoteSection = () => {
    return (
        <div className="flex w-full flex-col justify-center gap-16">
            <div className="flex flex-col gap-8">
                <h2 className="text-3xl leading-none font-bold text-[#E70068]">Dating with data.</h2>
                <div className="flex w-full items-center justify-center rounded-2xl bg-[#FFE7F0] px-32 py-12">
                    <div className="flex flex-col gap-3">
                        <p className="text-lg leading-tight font-semibold text-[#E70068] italic">
                            “The only reason I started learning computer science, was so I could optimise the shortest
                            path to you”
                        </p>
                        <p className="font-bold tracking-[2.2px] text-pink-800 opacity-50">KOUTARO YUMIBA</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DatingQuoteSection;
