import { AboutPage } from "@/types/pages/AboutPage";
import Duo from "@/components/primitives/Duo";

type WhyJoinProps = {
    whyJoin: AboutPage["whyJoin"];
};

export default function WhyJoin({ whyJoin }: WhyJoinProps) {
    return (
        <Duo image={{ src: whyJoin.image, alt: whyJoin.imageAlt }}>
            <h3 className="text-4xl leading-none font-extrabold tracking-tight text-blue-500">{whyJoin.title}</h3>
            <p className="text-md leading-[1.35] whitespace-pre-line">{whyJoin.content}</p>
        </Duo>
    );
}
