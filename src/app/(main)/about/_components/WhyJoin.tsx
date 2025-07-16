import { AboutPage } from "@/types/pages/AboutPage";
import Duo from "@/components/primitives/Duo";

type WhyJoinProps = {
    whyJoin: AboutPage["whyJoin"];
};

export default function WhyJoin({ whyJoin }: WhyJoinProps) {
    return (
        <Duo image={{ src: whyJoin.image, alt: whyJoin.imageAlt }}>
            <h3 className="text-md font-bold">{whyJoin.title}</h3>
            <p className="leading-[1.3] whitespace-pre-line">{whyJoin.content}</p>
        </Duo>
    );
}
