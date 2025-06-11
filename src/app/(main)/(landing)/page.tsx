import SignupCard from "@main/(landing)/_components/SignupCard";
import ThreeLayout from "@/components/layout/ThreePageLayout";
import Footer from "@/components/navigation/footer/Footer";
import BackgroundEffect from "@/components/three/BackgroundEffect";
import { View } from "@/components/three/scene/View";
import { ParsePayloadHeroPage } from "@/payload/globals/heropage/ParsePayloadHeroPage";
import { getHeroPage } from "@/payload/globals/heropage/getHeroPage";
import { SponsorSection } from "./_components/SponsorSection";
import ThisIsWDCC from "./_components/ThisIsWDCCSection";
import WDCCHero from "./_components/WDCCHero";
import { HeroData as hardCodedHeroData } from "./_data/homeData";

export default async function Home() {
    let HeroData = ParsePayloadHeroPage(await getHeroPage());
    if (!HeroData) {
        HeroData = hardCodedHeroData;
    }
    return (
        <ThreeLayout>
            <div className="absolute -z-20 h-[60vh] w-full bg-linear-to-b from-blue-50 to-white"></div>
            <View className="fixed -z-10 size-full scale-150" background>
                <BackgroundEffect />
            </View>
            <main className="responsive-body flex-col items-center justify-center gap-24 py-44">
                <WDCCHero hero={HeroData.Hero} />
                <div className="flex flex-col gap-36">
                    <ThisIsWDCC ThisIsWDCC={HeroData.ThisIsWDCC} />
                    <SponsorSection SponsorSection={HeroData.SponsorSection} />
                    <SignupCard SignUpCard={HeroData.SignUpCard} />
                </div>
            </main>
            <Footer className="mt-16" />
        </ThreeLayout>
    );
}
