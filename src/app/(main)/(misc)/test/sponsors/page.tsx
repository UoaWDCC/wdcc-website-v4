import { sponsorRegister } from "@/app/(main)/(hero)/_components/sponsor/demo/DemoSponsorSection";
import BackgroundEffect from "@/components/animation/three/BackgroundEffect";
import { View } from "@/components/animation/three/scene/View";
import ThreeLayout from "@/components/layout/pagelayouts/ThreePageLayout";

export default function TestSponsorPage() {
    return (
        <ThreeLayout>
            <View className="fixed -z-10 size-full scale-150" background>
                <BackgroundEffect />
            </View>
            <div className="flex w-dvw flex-col items-center justify-center gap-16">
                {sponsorRegister.map((SponsorSection, i) => (
                    <SponsorSection key={i} />
                ))}
            </div>
        </ThreeLayout>
    );
}
