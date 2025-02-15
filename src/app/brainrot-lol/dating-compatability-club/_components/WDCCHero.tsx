"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";

import Draw from "@/components/Draw";
import { Button } from "@/components/primitives/Button";
import { View } from "@/components/three/scene/View";

import { social } from "@/assets/svg/socials";

const WDCCThreeHero = dynamic(() => import("@/components/three/layout/home/WDCCThreeLogo").then((mod) => mod.default), {
    ssr: false,
});

const WDCCHero = () => {
    const ref = useRef<HTMLDivElement>(null);
    return (
        <div ref={ref} className="relative flex w-full flex-col gap-20 items-center justify-center">
            <div className="flex w-[clamp(300px,100%,1000px)] flex-col gap-10 items-center self-center px-8 text-center">
                <div className="flex flex-col gap-6 sm:gap-2">
                    <h3 className="text-sm sm:text-base font-normal tracking-[0.25em] text-white leading-none">WEB-BASED DATING AND COMPATIBILITY CLUB</h3>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-[-2px] text-white leading-[0.95]">
                        From
                        <em> campus crushes </em>
                        to those midnight coding rushes.
                    </h1>
                </div>
                <div className="flex flex-col gap-6 items-center self-center">
                    <p className="text-md sm:text-lg text-white leading-tight">
                        We help connect UoA’s coolest Computer Science, Software Engineering, and other degrees’ students with the partners that <Draw className="italic underline">
                        <span className="italic underline font-normal">help them shine</span>
                    </Draw> in life, love, and LeetCode.
                    </p>
                    <div className="flex gap-4 flex-col sm:flex-row items-center justify-center">
                        <Button variant={{ style: "primary", color: "blue" }}>Become a member for 2025</Button>
                        <div className="flex gap-4">
                            <Button variant={{ style: "secondary", color: "blue" }}
                                    className="px-2 [&>svg]:fill-blue-700 [&>svg]:scale-[90%]"
                                    href="https://discord.gg/CZX8aSSrGj">
                                <social.discord />
                            </Button>
                            <Button variant={{ style: "secondary", color: "blue" }}
                                    className="px-2 [&>svg]:fill-blue-700 [&>svg]:scale-[90%]"
                                    href="https://www.instagram.com/wdccuoa">
                                <social.instagram />
                            </Button>
                            <Button variant={{ style: "secondary", color: "blue" }}
                                    className="px-2 [&>svg]:fill-blue-700 [&>svg]:scale-[90%]"
                                    href="https://www.facebook.com/wdccuoa">
                                <social.facebook />
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
            <View className="flex h-[500px] w-[800px] flex-col items-center justify-center">
                <WDCCThreeHero parentRef={ref} />
            </View>
        </div>
    );
};

export default WDCCHero;
