import FooterLinks from "@/components/navigation/FooterLinks";
import NavigationBar from "@/components/navigation/NavigationBar";
import Hero from "@/components/three/Hero";

export default function Home() {
    return (
        <div className="relative flex h-dvh flex-col justify-between overflow-y-hidden">
            <NavigationBar className="px-12 pt-8" />
            <Hero />
            <FooterLinks />
        </div>
    );
}
