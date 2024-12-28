import NavigationBar from "@/components/navigation/navbar/NavigationBar";
import ThreeLayout from "@/components/ThreePageLayout";

import WDCCHero from "./_components/WDCCHero";

export default function Home() {
    return (
        <ThreeLayout>
            <nav className="background sticky top-4 z-10 rounded-full backdrop-blur-sm">
                <NavigationBar />
            </nav>
            <main className="mt-8 flex w-full flex-col justify-center">
                <WDCCHero />
            </main>
        </ThreeLayout>
    );
}
