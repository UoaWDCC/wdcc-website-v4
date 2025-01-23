"use client";

import ThreeLayout from "@/components/layout/ThreePageLayout";
import Footer from "@/components/navigation/footer/Footer";
import NavigationBar from "@/components/navigation/navbar/NavigationBar";
import BackgroundEffect from "@/components/three/BackgroundEffect";
import { View } from "@/components/three/scene/View";
import { cn } from "@/libs/utils";

import { SponsorSection } from "./_components/SponsorSection";
import ThisIsWDCC from "./_components/ThisIsWDCCSection";
import WDCCHero from "./_components/WDCCHero";
import { useTheme } from "@/contexts/ThemeContext";

export default function Home() {
    console.log(useTheme);

    const { isLight } = useTheme();

    return (
        <ThreeLayout>
            <View className="fixed -z-10 size-full scale-150" background>
                <BackgroundEffect />
            </View>
            <NavigationBar />
            <main className={cn("mt-8 flex w-full flex-col items-center justify-center", isLight ? "text-black" : "text-white bg-blue-500")}>
                <WDCCHero />
                <ThisIsWDCC />
                <SponsorSection />
            </main>
            <Footer className="mt-16" />
        </ThreeLayout>
    );
}
