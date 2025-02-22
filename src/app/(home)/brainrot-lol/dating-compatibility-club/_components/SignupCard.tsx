import React from "react";

import { Button } from "@/components/primitives/Button";
import Arrow from "@/assets/svg/Arrow";

const SignupCard = () => {
    return (
        <div className="flex flex-col gap-10 items-center justify-center bg-pink-200 w-full rounded-2xl py-10 px-12 md:py-12 md:px-16">
            <div className="w-full flex gap-8 justify-between md:flex-row flex-col">
                <h2 className="text-pink-800 text-2xl md:text-3xl font-bold flex-1 leading-[1.1]">Your university meet-cute dreams start here.</h2>
                <p className="flex-1 text-pink-800 text-md leading-[1.3]">WDCC membership is totally free, and lets you experience the magic of our award-winning dating and matchmaking programs right from your very first year. Make your campus experience a great one.
                </p>
            </div>
            <div className="flex gap-2 md:gap-4 items-center w-full justify-items-start md:flex-row flex-col">
                <Button variant={{style: "secondary", color: "dark"}} className="text-md px-16 py-3">Join WDCC <Arrow/></Button>
            </div>
        </div>
    );
};

export default SignupCard;
