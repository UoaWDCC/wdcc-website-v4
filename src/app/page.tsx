import NavigationBar from "@/components/common/NavigationBar";
import ThreeLayout from "@/components/common/ThreePageLayout";
import WDCCHero from "@/components/layout/app/WDCCHero";

export default function Home() {
    return (
        <ThreeLayout>
            <nav className="background sticky top-4 z-10 rounded-full backdrop-blur-sm">
                <NavigationBar className="py-4" />
            </nav>
            <main className="mt-8 flex w-full flex-col justify-center">
                <WDCCHero />
            </main>
        </ThreeLayout>
    );
}
