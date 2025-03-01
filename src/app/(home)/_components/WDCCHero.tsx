"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

import { social } from "@/assets/svg/socials";
import Draw from "@/components/Draw";
import { Button } from "@/components/primitives/Button";
import { CommonLight } from "@/components/three/CommonLight";
import { View } from "@/components/three/scene/View";

const WDCCThreeHero = dynamic(() => import("@/components/three/layout/home/WDCCThreeLogo").then((mod) => mod.default), {
    ssr: false,
});

interface WDCCHeroProps {
    hero: {
        title: string;
        blurb: string;
    };
}
const WDCCHero = ({ hero }: WDCCHeroProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const camera = useRef<THREE.PerspectiveCamera>(null!);

    return (
        <div ref={ref} className="relative flex w-full flex-col items-center justify-center gap-20">
            <div className="flex w-[clamp(300px,100%,1000px)] flex-col items-center gap-10 self-center px-8 text-center">
                <div className="flex flex-col gap-6 sm:gap-2">
                    <h3 className="text-sm font-normal leading-none tracking-[0.25em] text-blue-800 sm:text-base">
                        {hero.title}
                    </h3>
                    <h1 className="text-4xl font-bold leading-[0.95] tracking-[-2px] text-blue-700 sm:text-5xl">
                        Aotearoa’s
                        <em> largest </em>
                        <span className="bg-gradient-to-br from-orange-400 to-purple-700 bg-clip-text text-transparent">
                            student technology society.
                        </span>
                    </h1>
                </div>
                <div className="flex flex-col items-center gap-6 self-center">
                    <p className="text-md leading-tight text-blue-700 sm:text-lg">
                        {hero.blurb}
                        <Draw className="italic underline">
                            <span className="font-normal italic underline">help them shine</span>
                        </Draw>
                        .
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button variant={{ style: "primary", color: "blue" }}>Become a member for 2025</Button>
                        <div className="flex gap-4">
                            <Button
                                variant={{ style: "secondary", color: "blue" }}
                                className="px-2 [&>svg]:scale-[90%] [&>svg]:fill-blue-700"
                                href="https://discord.gg/CZX8aSSrGj"
                            >
                                <social.discord />
                            </Button>
                            <Button
                                variant={{ style: "secondary", color: "blue" }}
                                className="px-2 [&>svg]:scale-[90%] [&>svg]:fill-blue-700"
                                href="https://www.instagram.com/wdccuoa"
                            >
                                <social.instagram />
                            </Button>
                            <Button
                                variant={{ style: "secondary", color: "blue" }}
                                className="px-2 [&>svg]:scale-[90%] [&>svg]:fill-blue-700"
                                href="https://www.facebook.com/wdccuoa"
                            >
                                <social.facebook />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <View className="flex h-[250px] w-dvw flex-col items-center justify-center md:h-[400px] lg:h-[600px]">
                <WDCCThreeHero parentRef={ref} />
                <CommonLight />
                <PerspectiveCamera ref={camera} makeDefault position={[0, 0, 2.5]} />
            </View>
        </div>
    );
};

export default WDCCHero;
