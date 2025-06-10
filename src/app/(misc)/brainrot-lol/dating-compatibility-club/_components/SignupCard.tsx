import React from "react";

import Arrow from "@/assets/svg/Arrow";
import { Button } from "@/components/primitives/Button";

// IMPORTANT This is for the DATING BRAINROT page - not the actual production landing!

const SignupCard = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-10 rounded-2xl pb-12">
            <div className="flex w-full flex-col justify-between gap-8 md:flex-row">
                <h2 className="flex-1 text-2xl leading-[1.1] font-bold text-[#E70068] md:text-3xl">
                    Your university meet-cute dreams start here.
                </h2>
                <p className="text-md flex-1 leading-[1.3]">
                    WDCC membership is totally free, and lets you experience the magic of our award-winning dating and
                    matchmaking programs right from your very first year. Make your campus experience a great one.
                </p>
            </div>
            <div className="flex w-full flex-col items-center justify-items-start gap-2 md:flex-row md:gap-4">
                <Button variant={{ style: "secondary", color: "dark" }} className="text-md px-16 py-3">
                    Join WDCC <Arrow />
                </Button>
            </div>
        </div>
    );
};

export default SignupCard;
