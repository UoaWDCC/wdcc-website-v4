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
                <div className="mt-8 flex items-center justify-center text-xl text-blue-700">
                    <p className="w-[clamp(300px,100%,800px)] text-center">
                        We promote the learning and practice of software development through workshops and real-world
                        projects, to equip and inspire tomorrow&apos;s talent
                    </p>
                </div>
                <div className="mt-8 flex flex-col items-center justify-center text-xl text-blue-700">
                    <h2 className="text-center text-5xl font-semibold">What do we do?</h2>
                    <p className="w-[clamp(300px,100%,800px)] text-center">
                        WDCC aims to bridge the gap between university knowledge and real-world industry practices. We
                        run projects with real-world clients that solve real-world problems.
                    </p>
                </div>
                <div>
                    <div className="h-[2000px]"></div>
                </div>
            </main>
        </ThreeLayout>
    );
}
