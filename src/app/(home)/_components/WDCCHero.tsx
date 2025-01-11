"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";

import Draw from "@/components/Draw";
import { Button } from "@/components/primitives/Button";
import { View } from "@/components/three/scene/View";

const WDCCThreeHero = dynamic(() => import("@/components/three/layout/home/WDCCThreeLogo").then((mod) => mod.default), {
    ssr: false,
});

const WDCCHero = () => {
    const ref = useRef<HTMLDivElement>(null);
    return (
        <div ref={ref} className="relative flex h-dvh w-full flex-col items-center justify-center">
            <div className="flex w-[clamp(300px,100%,1100px)] flex-col items-center self-center px-8 text-center text-md">
                <h3 className="font-normal tracking-[25%] text-blue-800">WEB DEVELOPMENT AND CONSULTING CLUB</h3>
                <h1 className="text-5xl font-bold italic text-blue-brand">
                    Aotearoa’s largest student technology society.
                </h1>
                <p className="mt-8 text-lg text-blue-700">
                    We connect tomorrow’s developers, designers, and tech project leaders with the real-world experience
                    and opportunities that <Draw className="italic underline">help them shine</Draw>.
                </p>
                <div className="mt-8">
                    <Button variant={{ style: "primary", color: "blue" }}>Become a member for 2025</Button>
                </div>
            </div>
            <View className="flex h-[500px] w-[800px] flex-col items-center justify-center">
                <WDCCThreeHero parentRef={ref} />
            </View>
        </div>
    );
};

export default WDCCHero;
