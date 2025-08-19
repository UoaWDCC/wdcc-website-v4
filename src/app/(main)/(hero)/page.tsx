import SignupCard from "@/app/(main)/(hero)/_components/SignupCard";
import BackgroundEffect from "@/components/animation/three/BackgroundEffect";
import { View } from "@/components/animation/three/scene/View";
import { Footer, ThreePageLayout } from "@/components/layout";
import { getHeroPage } from "@/payload/globals/heropage/getHeroPage";
import { SponsorSection } from "./_components/SponsorSection";
import ThisIsWDCC from "./_components/ThisIsWDCCSection";
import Hero from "./_components/WDCCHero";

export default async function HeroPage() {
    const heroData = await getHeroPage();

    return (
        <ThreePageLayout>
            <div className="absolute -z-20 h-[60vh] w-full bg-linear-to-b from-blue-50 to-white"></div>
            <View className="fixed -z-10 size-full scale-150" background>
                <BackgroundEffect />
            </View>
            <main className="responsive-body flex-col items-center justify-center gap-24 py-44">
                <Hero hero={heroData.Hero} />
                <div className="flex flex-col gap-36">
                    <ThisIsWDCC ThisIsWDCC={heroData.ThisIsWDCC} />
                    <SponsorSection SponsorSection={heroData.SponsorSection} />
                    <SignupCard SignUpCard={heroData.SignUpCard} />
                </div>
            </main>
            <Footer className="mt-16" />
        </ThreePageLayout>
    );
}
