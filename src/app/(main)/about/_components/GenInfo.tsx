import { AboutPage } from "@/types/pages/AboutPage";
import Duo from "@/components/primitives/Duo";

type GenInfoProps = {
    genInfo: AboutPage["genInfo"];
};

export default function GenInfo({ genInfo }: GenInfoProps) {
    return (
        <Duo image={{ src: genInfo.image, alt: genInfo.imageAlt }}>
            <p className="text-md leading-tight font-semibold whitespace-pre-line sm:text-lg">{genInfo.firstPart}</p>
            <p className="text-md text-blue-brand leading-tight font-semibold whitespace-pre-line sm:text-lg">
                {genInfo.secondPart}
            </p>
        </Duo>
    );
}
