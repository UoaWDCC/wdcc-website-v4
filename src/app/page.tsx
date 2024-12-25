import NavigationBar from "@/components/common/NavigationBar";
import ThreeLayout from "@/components/common/ThreePageLayout";
import WDCCHero from "@/components/layout/app/WDCCHero";
import BackgroundEffect from "@/components/three/component/BackgroundEffect";
import { View } from "@/components/three/scene/View";

export default function Home() {
    return (
        <ThreeLayout>
            <View className="fixed -z-10 size-full scale-150" background>
                <BackgroundEffect />
            </View>
            <nav className="background sticky top-4 z-10 rounded-full">
                <NavigationBar className="py-4" />
            </nav>
            <main className="mt-8 flex w-full flex-col justify-center">
                <WDCCHero />
            </main>
        </ThreeLayout>
    );
}
