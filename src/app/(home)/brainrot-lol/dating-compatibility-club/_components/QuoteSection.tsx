import React from "react";

// IMPORTANT This is for the DATING BRAINROT page - not the actual production landing!


const DatingQuoteSection = () => {
    return (
        <div className="w-full flex flex-col gap-16 justify-center">
            <div className="flex flex-col gap-8">
                <h2 className="text-3xl font-bold leading-none text-[#E70068]">
                    Dating with data.
                </h2>
                <div className="w-full px-32 py-12 flex items-center justify-center bg-[#FFE7F0] rounded-2xl">

                    <div className="flex flex-col gap-3">
                        <p className="font-semibold text-lg text-[#E70068] leading-tight italic">“The only reason I started learning computer science, was so I could optimise the shortest path to you”</p>
                        <p className="font-bold tracking-[2.2px] text-pink-800 opacity-50">KOUTARO YUMIBA</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default DatingQuoteSection;
