import Footer from "@/components/navigation/footer/Footer";
import NavigationBar from "@/components/navigation/navbar/NavigationBar";
import BackgroundEffect from "@/components/three/BackgroundEffect";
import { View } from "@/components/three/scene/View";
import ThreeLayout from "@/components/ThreePageLayout";

import { SponsorSection } from "./_components/SponsorSection";
import ThisIsWDCC from "./_components/ThisIsWDCCSection";
import WDCCHero from "./_components/WDCCHero";

export default function Home() {
    return (
        <ThreeLayout>
            <View className="fixed -z-10 size-full scale-150" background>
                <BackgroundEffect />
            </View>
            <nav className="background sticky top-0 z-10 rounded-full">
                <NavigationBar className="py-4" />
            </nav>
            <main className="mt-8 flex w-full flex-col items-center justify-center">
                <WDCCHero />
                <ThisIsWDCC />
                <SponsorSection />
            </main>
            <Footer className="mt-16" />
        </ThreeLayout>
    );
}
