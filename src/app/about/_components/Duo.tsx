import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

import placeholder from "@/assets/image/600x400.png";

interface DuoProps {
    children: ReactNode;
    imgSrc: StaticImageData | null;
    imgAlt?: string;
    imgFirst?: boolean;
}

export default function Duo({
    children,
    imgSrc = null,
    imgAlt = "Image missing alt :( - please email us about this issue",
    imgFirst = false,
}: DuoProps) {
    const img = imgSrc ? imgSrc : placeholder;

    return (
        <div className="flex flex-col items-center justify-center gap-x-48 gap-y-8 lg:flex-row">
            <div className={`order-2 flex flex-1 flex-col gap-y-6 ${imgFirst ? "lg:order-2" : "lg:order-1"}`}>
                {children}
            </div>
            <div
                className={`order-1 flex flex-1 items-center justify-center ${imgFirst ? "lg:order-1" : "lg:order-2"}`}
            >
                <Image src={img} alt={imgAlt} className="h-auto w-auto rounded-[16px]" />
            </div>
        </div>
    );
}
