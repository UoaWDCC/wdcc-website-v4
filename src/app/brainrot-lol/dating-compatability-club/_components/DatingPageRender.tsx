import Footer from "@/components/navigation/footer/Footer";
import NavigationBar from "@/components/navigation/navbar/NavigationBar";
import BackgroundEffect from "@/components/three/BackgroundEffect";
import { View } from "@/components/three/scene/View";
import ThreeLayout from "@/components/layout/ThreePageLayout";

import ThisIsWDCC from "./ThisIsWDCCSection";
import ComingUp from "@/app/(home)/_components/ComingUpSection";
import WDCCHero from "./WDCCHero";
import SignupCard from "@/app/(home)/_components/SignupCard";

export default function DatingPage() {
    return (
        <ThreeLayout>
            <audio controls autoPlay src="/music/HATSUNE-MIKU_Hand_in_Hand_(Magical_Mirai_ver)_MAGICAL_MIRAI_2015.mp3" >
            </audio>
            <div className="absolute -z-20 w-full h-[100vh] bg-gradient-to-b from-[#DD3173] to-[#DF99B9]">

            </div>
            <div className="absolute top-[100vh] -z-20 w-full h-[150vh] bg-gradient-to-b from-[#FFDAE7] to-[#FFF]">

            </div>
            <View className="fixed -z-10 size-full scale-150" color="pink" background>
                <BackgroundEffect />
            </View>
            <NavigationBar variant={{ color: "light" }} />
            <main className="responsive-body flex-col gap-24 items-center justify-center py-44">
                <WDCCHero />
                <div className="flex flex-col gap-36">
                    <ThisIsWDCC />
                    <ComingUp />
                    <SignupCard />
                </div>
            </main>
            <Footer className="mt-16" />
        </ThreeLayout>
    );
}
