import SignupCard from "@/app/(main)/(hero)/_components/SignupCard";
import BackgroundEffect from "@/components/animation/three/BackgroundEffect";
import { View } from "@/components/animation/three/scene/View";
import { Footer } from "@/components/layout";
import ThreeLayout from "@/components/layout/pagelayouts/ThreePageLayout";
import { getHeroPage } from "@/payload/globals/heropage/getHeroPage";
import { parseHeroPage } from "@/payload/globals/heropage/parseHeroPage";
import { SponsorSection } from "./_components/SponsorSection";
import ThisIsWDCC from "./_components/ThisIsWDCCSection";
import WDCCHero from "./_components/WDCCHero";
import { HeroData as hardCodedHeroData } from "./_data/homeData";

export default async function HeroPage() {
    let HeroData = parseHeroPage(await getHeroPage());
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
