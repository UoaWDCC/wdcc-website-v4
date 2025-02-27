import React from "react";

import { Button } from "@/components/primitives/Button";
import Arrow from "@/assets/svg/Arrow";

// IMPORTANT This is for the DATING BRAINROT page - not the actual production landing!


const SignupCard = () => {
    return (
        <div className="flex flex-col gap-10 items-center justify-center  w-full rounded-2xl pb-12">
            <div className="w-full flex gap-8 justify-between md:flex-row flex-col">
                <h2 className="text-[#E70068] text-2xl md:text-3xl font-bold flex-1 leading-[1.1]">Your university meet-cute dreams start here.</h2>
                <p className="flex-1 text-md leading-[1.3]">WDCC membership is totally free, and lets you experience the magic of our award-winning dating and matchmaking programs right from your very first year. Make your campus experience a great one.
                </p>
            </div>
            <div className="flex gap-2 md:gap-4 items-center w-full justify-items-start md:flex-row flex-col">
                <Button variant={{style: "secondary", color: "dark"}} className="text-md px-16 py-3">Join WDCC <Arrow/></Button>
            </div>
        </div>
    );
};

export default SignupCard;
