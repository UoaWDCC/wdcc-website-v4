"use client";

import Footer from "@/components/navigation/footer/Footer";
import NavigationBar from "@/components/navigation/navbar/NavigationBar";

import ThisIsWDCC from "./ThisIsWDCCSection";
import WDCCHero from "./WDCCHero";
import SignupCard from "./SignupCard";

import { useRive  } from '@rive-app/react-canvas';
import React from "react";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

export default function DatingPage() {
    const [heroAnimEnded, setHeroAnimEnded] = React.useState(true);

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
                    <StandardPageLayout>
                        <div
                            className="absolute top-0 -z-20 w-full h-[100vh] bg-gradient-to-b from-[#DD3173] to-[#DF99B9]">
                        </div>
                        <div
                            className="absolute top-[100vh] -z-20 w-full h-[150vh] bg-gradient-to-b from-[#FFDAE7] to-[#FFF]">
                        </div>
                        {/*<View className="fixed -z-10 size-full scale-150" color="pink" background>*/}
                        {/*    <BackgroundEffect />*/}
                        {/*</View>*/}
                        <NavigationBar variant={{ color: "dark" }} />
                        <main className="responsive-body flex-col gap-24 items-center justify-center py-44">
                            <WDCCHero />
                            <div className="flex flex-col gap-36">
                                <ThisIsWDCC />
                                <SignupCard />
                            </div>
                        </main>
                        <Footer className="mt-16" />
                    </StandardPageLayout>
                    :
                    <>
                        <StandardPageLayout navColor="dark">
                            <div
                                className="absolute top-0 -z-20 w-full h-[100vh] bg-gradient-to-b from-[#DD3173] to-[#DF99B9]">
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
