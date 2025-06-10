import { sponsorRegister } from "@/app/(main)/(landing)/_components/sponsor/demo/DemoSponsorSection";
import ThreeLayout from "@/components/layout/ThreePageLayout";
import BackgroundEffect from "@/components/three/BackgroundEffect";
import { View } from "@/components/three/scene/View";

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
