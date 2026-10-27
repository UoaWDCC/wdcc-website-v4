"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { PerspectiveCamera } from "@react-three/drei";
import { PerspectiveCamera as PerspectiveCameraType } from "three";
import HeroFallback from "@/assets/image/hero/herofallback.png";
import { CommonLight } from "@/components/animation/three/CommonLight";
import { View } from "@/components/animation/three/scene/View";
import { HeroHeading } from "./HeroHeading";
import { HeroLinks } from "./HeroLinks";
import { HeroSubHeading } from "./HeroSubHeading";

const WDCCThreeHero = dynamic(
    () => import("@/components/animation/three/layout/home/WDCCThreeLogo").then((mod) => mod.default),
    {
        ssr: false,
    }
);

type HeroProps = {
    hero: {
        title: string;
        blurb: string;
        memberButton: {
            label: string;
            href: string;
        };
    };
};

const Hero = ({ hero }: HeroProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const camera = useRef<PerspectiveCameraType>(null);

    return (
        <div ref={ref} className="relative flex w-full flex-col gap-20">
            <div className="flex max-w-[800px] flex-col gap-6">
                <HeroHeading title={hero.title} />
                <div className="flex flex-col gap-6">
                    <HeroSubHeading blurb={hero.blurb} />
                    <HeroLinks memberButton={hero.memberButton} />
                </div>
            </div>
            <View
                fallback={<Image src={HeroFallback} height={500} width={1000} alt="WDCC hero" />}
                className="flex h-[250px] w-dvw flex-col items-center justify-center self-center md:h-[400px] lg:h-[600px]"
            >
                <WDCCThreeHero parentRef={ref} />
                <CommonLight />
                <PerspectiveCamera ref={camera} makeDefault position={[0, 0, 2.5]} />
            </View>
        </div>
    );
};

export default Hero;
