import FooterDesc from "@/components/navigation/FooterDesc";
import NavigationBar from "@/components/navigation/NavigationBar";

export default function Home() {
    return (
        <div className="relative flex h-dvh flex-col justify-between">
            <NavigationBar className="mt-8 px-12" />
            <FooterDesc />
        </div>
    );
}
