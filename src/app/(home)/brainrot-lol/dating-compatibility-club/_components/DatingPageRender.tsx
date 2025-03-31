"use client";

import DatingQuoteSection from "@app/brainrot-lol/dating-compatibility-club/_components/QuoteSection";
import DatingTextSection from "@app/brainrot-lol/dating-compatibility-club/_components/DatingTextSection";
import ThisIsWDCC from "./ThisIsWDCCSection";
import WDCCHero from "./WDCCHero";
import SignupCard from "./SignupCard";

import { useRive  } from '@rive-app/react-canvas';
import React from "react";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

export default function DatingPage() {
    const [heroAnimEnded, setHeroAnimEnded] = React.useState(false);

    const { RiveComponent } = useRive({
        src: "/rive/wdcc_dating_lander.riv",
        artboard: "Artboard",
        autoplay: true,
        onStop: () => setHeroAnimEnded(true),
    });

    return (
        <>
            <audio autoPlay src="/music/HATSUNE-MIKU_Hand_in_Hand_(Magical_Mirai_ver)_MAGICAL_MIRAI_2015.mp3">
            </audio>
            {
                heroAnimEnded ?
                    <StandardPageLayout navColor="light">
                        <div
                            className="fixed top-0 -z-20 w-full h-[100vh] bg-linear-to-b from-[#ffbad3] to-[#FFF6F9]">
                        </div>
                        {/*<View className="fixed -z-10 size-full scale-150" color="pink" background>*/}
                        {/*    <BackgroundEffect />*/}
                        {/*</View>*/}
                        <main className="flex-col gap-2 items-center justify-center pb-44 pt-36 sm:pt-20 md:pt-0">
                            <WDCCHero />
                            <div className="flex flex-col gap-64 mt-36 sm:mt-20 md:mt-0">
                                <ThisIsWDCC />
                                <DatingTextSection />
                                <DatingQuoteSection />
                                <div className="h-[2px] bg-pink-900 opacity-25 rounded-2xl w-[50%] mx-auto"></div>
                                <SignupCard />
                            </div>
                        </main>
                    </StandardPageLayout>
                    :
                    <>
                        <StandardPageLayout navColor="dark">
                            <div
                                className="absolute top-0 -z-20 w-full h-[100vh] bg-linear-to-b from-[#DD3173] to-[#DF99B9]">
                            </div>
                            <div className="flex flex-col justify-center w-full">
                                <div className="w-full h-[100vh] pb-40">
                                    <RiveComponent />
                                </div>
                            </div>
                        </StandardPageLayout>
                    </>

            }
        </>
    )
}
