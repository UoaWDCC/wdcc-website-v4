"use client";

import React from "react";
import { useRive } from "@rive-app/react-canvas";
import DatingTextSection from "@/app/(site)/brainrot-lol/dating-compatibility-club/_components/DatingTextSection";
import DatingQuoteSection from "@/app/(site)/brainrot-lol/dating-compatibility-club/_components/QuoteSection";
import StandardPageLayout from "@/components/layout/StandardPageLayout";
import SignupCard from "./SignupCard";
import ThisIsWDCC from "./ThisIsWDCCSection";
import WDCCHero from "./WDCCHero";

export default function DatingPage() {
    const [heroAnimEnded, setHeroAnimEnded] = React.useState(false);

    const { RiveComponent } = useRive({
        src: "/rive/wdcc_dating_lander.riv",
        artboard: "Artboard",
        autoplay: true,
        onStop: () => {
            setHeroAnimEnded(true);
        },
    });

    return (
        <>
            <audio autoPlay src="/music/HATSUNE-MIKU_Hand_in_Hand_(Magical_Mirai_ver)_MAGICAL_MIRAI_2015.mp3"></audio>
            {heroAnimEnded ? (
                <StandardPageLayout navColor="light">
                    <div className="fixed top-0 -z-20 h-[100vh] w-full bg-linear-to-b from-[#ffbad3] to-[#FFF6F9]"></div>
                    {/*<View className="fixed -z-10 size-full scale-150" color="pink" background>*/}
                    {/*    <BackgroundEffect />*/}
                    {/*</View>*/}
                    <main className="flex-col items-center justify-center gap-2 pt-36 pb-44 sm:pt-20 md:pt-0">
                        <WDCCHero />
                        <div className="mt-36 flex flex-col gap-64 sm:mt-20 md:mt-0">
                            <ThisIsWDCC />
                            <DatingTextSection />
                            <DatingQuoteSection />
                            <div className="mx-auto h-[2px] w-[50%] rounded-2xl bg-pink-900 opacity-25"></div>
                            <SignupCard />
                        </div>
                    </main>
                </StandardPageLayout>
            ) : (
                <>
                    <StandardPageLayout navColor="dark">
                        <div className="absolute top-0 -z-20 h-[100vh] w-full bg-linear-to-b from-[#DD3173] to-[#DF99B9]"></div>
                        <div className="flex w-full flex-col justify-center">
                            <div className="h-[100vh] w-full pb-40">
                                <RiveComponent />
                            </div>
                        </div>
                    </StandardPageLayout>
                </>
            )}
        </>
    );
}
