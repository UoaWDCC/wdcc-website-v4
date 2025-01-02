import NavigationBar from "@/components/navigation/navbar/NavigationBar";
import ThreeLayout from "@/components/ThreePageLayout";

import WDCCHero from "./_components/WDCCHero";

export default function Home() {
    return (
        <ThreeLayout>
            <div className="sticky top-0 z-10">
                <NavigationBar />
            </div>
            <main className="mt-8 flex w-full flex-col justify-center">
                <WDCCHero />
            </main>
        </ThreeLayout>
    );
}
