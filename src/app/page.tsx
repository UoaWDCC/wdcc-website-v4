import FooterLinks from "@/components/navigation/FooterLinks";
import NavigationBar from "@/components/navigation/NavigationBar";

export default function Home() {
    return (
        <div className="relative flex h-dvh flex-col justify-between overflow-y-hidden">
            <NavigationBar className="mt-8 px-12" />
            <FooterLinks />
        </div>
    );
}
