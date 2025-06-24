"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { PerspectiveCamera } from "@react-three/drei";
import type { PerspectiveCamera as PerspectiveCameraType } from "three";
import HeroFallback from "@/assets/image/hero/herofallback.png";
import { CommonLight } from "@/components/old/three/CommonLight";
import { View } from "@/components/old/three/scene/View";
import { HeroHeading } from "./HeroHeading";
import { HeroLinks } from "./HeroLinks";
import { HeroSubHeading } from "./HeroSubHeading";

const WDCCThreeHero = dynamic(
    () => import("@/components/old/three/layout/home/WDCCThreeLogo").then((mod) => mod.default),
    {
        ssr: false,
    }
);

type WDCCHeroProps = {
    hero: {
        title: string;
        blurb: string;
    };
};
const Hero = ({ hero }: WDCCHeroProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const camera = useRef<PerspectiveCameraType>(null);

    return (
        <div ref={ref} className="relative flex w-full flex-col items-center justify-center gap-20">
            <div className="flex w-[clamp(300px,100%,1000px)] flex-col items-center gap-10 self-center px-8 text-center">
                <HeroHeading title={hero.title} />
                <div className="flex flex-col items-center gap-6 self-center">
                    <HeroSubHeading blurb={hero.blurb} />
                    <HeroLinks />
                </div>
            </div>
            <View
                fallback={<Image src={HeroFallback} height={500} width={1000} alt="WDCC hero" />}
                className="flex h-[250px] w-dvw flex-col items-center justify-center md:h-[400px] lg:h-[600px]"
            >
                <WDCCThreeHero parentRef={ref} />
                <CommonLight />
                <PerspectiveCamera ref={camera} makeDefault position={[0, 0, 2.5]} />
            </View>
        </div>
    );
};

export default Hero;
