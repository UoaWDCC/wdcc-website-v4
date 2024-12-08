import StandardPageLayout from "@/components/common/StandardPageLayout";
import WDCCHero from "@/components/three/scene/WDCCHero";

export default function Home() {
    return (
        <StandardPageLayout>
            <div className="mt-8 flex w-full justify-center">
                <WDCCHero />
            </div>
        </StandardPageLayout>
    );
}
