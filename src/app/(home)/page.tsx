import BackgroundEffect from "@/app/(home)/_components/BackgroundEffect";
import NavigationBar from "@/components/NavigationBar";
import { View } from "@/components/three/scene/View";
import ThreeLayout from "@/components/ThreePageLayout";

import ThisIsWDCC from "./_components/ThisIsWdcc";
import WDCCHero from "./_components/WDCCHero";

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
                {/* <Erm /> */}
                <ThisIsWDCC />
                <div>
                    <div className="h-[2000px]"></div>
                </div>
            </main>
        </ThreeLayout>
    );
}
