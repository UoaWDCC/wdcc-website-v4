import BackgroundEffect from "@/app/(home)/_components/BackgroundEffect";
import FooterLinks from "@/components/navigation/footer/FooterLinks";
import NavigationBar from "@/components/navigation/navbar/NavigationBar";
import { View } from "@/components/three/scene/View";
import ThreeLayout from "@/components/ThreePageLayout";

import SponsorSection from "./_components/SponsorSection";
import ThisIsWDCC from "./_components/ThisIsWdcc";
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
                <div>
                    <div className="h-[1000px]"></div>
                </div>
            </main>
            <FooterLinks />
        </ThreeLayout>
    );
}
