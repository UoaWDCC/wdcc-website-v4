import { AboutPage } from "@/types/pages/AboutPage";
import Duo from "@/components/primitives/Duo";

type WhyJoinProps = {
    whyJoin: AboutPage["whyJoin"];
};

export default function WhyJoin({ whyJoin }: WhyJoinProps) {
    return (
        <Duo image={{ src: whyJoin.image, alt: whyJoin.imageAlt }}>
            <h3 className="text-4xl tracking-tight leading-none font-extrabold text-blue-500">{whyJoin.title}</h3>
            <p className="leading-[1.35] whitespace-pre-line text-md">{whyJoin.content}</p>
        </Duo>
    );
}
