import { ReactNode } from "react";
import Image from "next/image";
import placeholder from "@public/600x400.png";

interface DuoProps {
    children: ReactNode;
    imgSrcPath?: string;
    imgAlt?: string;
    imgFirst?: boolean;
}

export default function Duo({
    children,
    imgSrcPath = "",
    imgAlt = "Image Missing Alt :( - Please notify us by email of this issue",
    imgFirst = false,
}: DuoProps) {
    const imgSrc = imgSrcPath ? imgSrcPath : placeholder;

    return (
        <div className="flex flex-col items-center justify-center gap-x-48 gap-y-8 lg:flex-row">
            <div className={`order-2 flex flex-1 flex-col gap-y-6 ${imgFirst ? "lg:order-2" : "lg:order-1"}`}>
                {children}
            </div>
            <div
                className={`order-1 flex flex-1 items-center justify-center ${imgFirst ? "lg:order-1" : "lg:order-2"}`}
            >
                <Image src={imgSrc} alt={imgAlt} width={600} height={400} className="h-auto w-auto rounded-[16px]" />
            </div>
        </div>
    );
}
