import FooterLinks from "@/components/base/FooterLinks";
import NavigationBar from "@/components/base/NavigationBar";
import WDCCHero from "@/components/three/scene/WDCCHero";

export default function Home() {
    return (
        <div className="relative flex min-h-dvh flex-col justify-between">
            <NavigationBar className="px-12 pt-8" />
            <div className="mt-8 flex w-full justify-center">
                <WDCCHero />
            </div>
            <FooterLinks />
        </div>
    );
}
