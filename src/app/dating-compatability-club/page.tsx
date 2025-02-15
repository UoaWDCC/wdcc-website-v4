import Footer from "@/components/navigation/footer/Footer";
import NavigationBar from "@/components/navigation/navbar/NavigationBar";
import BackgroundEffect from "@/components/three/BackgroundEffect";
import { View } from "@/components/three/scene/View";
import ThreeLayout from "@/components/layout/ThreePageLayout";

import { SponsorSection } from "./_components/SponsorSection";
import ThisIsWDCC from "./_components/ThisIsWDCCSection";
import ComingUp from "@/app/(home)/_components/ComingUpSection";
import WDCCHero from "./_components/WDCCHero";
import SignupCard from "@/app/(home)/_components/SignupCard";

export default function Home() {
    return (
        <ThreeLayout>
            <div className="absolute -z-20 w-full h-[60vh] bg-gradient-to-b from-blue-50 to-white">

            </div>
            <View className="fixed -z-10 size-full scale-150" background>
                <BackgroundEffect />
            </View>
            <NavigationBar />
            <main className="responsive-body flex-col gap-24 items-center justify-center py-44">
                <WDCCHero />
                <div className="flex flex-col gap-36">
                    <ThisIsWDCC />
                    <ComingUp/>
                    <SponsorSection />
                    <SignupCard/>
                </div>
            </main>
            <Footer className="mt-16" />
        </ThreeLayout>
    );
}
