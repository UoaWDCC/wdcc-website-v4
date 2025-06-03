import React from "react";

// IMPORTANT This is for the DATING BRAINROT page - not the actual production landing!

const DatingTextSection = () => {
    return (
        <div className="flex w-full flex-col justify-center gap-16">
            <div className="flex w-[80%] flex-col gap-8">
                <h2 className="text-3xl leading-none font-bold text-[#E70068]">Live, laugh, love.</h2>
                <p className="text-lg leading-tight">
                    WDCC was built in 2015 upon a single guiding principle: that tech students didn&apos;t have the
                    proper support they needed to branch out, commit, and merge together. Our founders set out to change
                    that.
                </p>
                <p className="text-lg leading-tight">
                    Over the years, we have become New Zealand&apos;s largest student technology-dating club. Our 17,501
                    members have a record 17.6% date success rate, and we are committed to building a community of
                    passionate, caring individuals who support one another in all life&apos;s journeys.
                </p>
                <p className="text-lg leading-tight">
                    We firmly believe in the phrase:{" "}
                    <span className="font-semibold text-blue-700 italic">Love sharpens iron.</span>
                </p>
            </div>
        </div>
    );
};

export default DatingTextSection;
