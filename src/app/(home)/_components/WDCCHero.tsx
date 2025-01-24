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
        <div ref={ref} className="relative flex w-full flex-col gap-20 items-center justify-center py-44">
            <div className="flex w-[clamp(300px,100%,1000px)] flex-col gap-10 items-center self-center px-8 text-center">
                <div className="flex flex-col gap-2">
                    <h3 className="font-normal tracking-[0.25em] text-blue-800 leading-none">WEB DEVELOPMENT AND
                        CONSULTING CLUB</h3>
                    <h1 className="text-5xl font-bold tracking-[-2px] text-blue-700 leading-[0.95]">
                        Aotearoa’s
                        <em> largest </em>
                        <span className="bg-gradient-to-br from-orange-400 to-purple-700 text-transparent bg-clip-text">student technology society.</span>
                    </h1>
                </div>
                <div className="flex flex-col gap-6 items-center self-center">
                    <p className="text-lg text-blue-700 leading-tight">
                        We connect tomorrow’s developers, designers, and tech project leaders with the real-world
                        experience
                        and opportunities that <Draw className="italic underline">
                        <span className="italic underline font-normal">help them shine</span>
                    </Draw>.
                    </p>
                    <div className="flex gap-4">
                        <Button variant={{ style: "primary", color: "blue" }}>Become a member for 2025</Button>
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
            <View className="flex h-[500px] w-[800px] flex-col items-center justify-center">
                <WDCCThreeHero parentRef={ref} />
            </View>
        </div>
    );
};

export default WDCCHero;
