import Image from "next/image";
import placeholder from "@public/600x400.png";

interface DuoProps {
    title: string;
    content: string;
    imgSrcPath?: string;
    imgAlt?: string;
    imgFirst?: boolean;
}

export default function Duo({ title, content, imgSrcPath = "", imgAlt = `${title}`, imgFirst = false }: DuoProps) {
    const imgSrc = imgSrcPath ? imgSrcPath : placeholder;

    return (
        <div className="flex flex-col items-center justify-center gap-x-48 gap-y-8 lg:flex-row">
            <div className={`order-2 flex-1 ${imgFirst ? "lg:order-2" : "lg:order-1"}`}>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="whitespace-pre-line">{content}</p>
            </div>
            <div
                className={`order-1 flex flex-1 items-center justify-center ${imgFirst ? "lg:order-1" : "lg:order-2"}`}
            >
                <Image src={imgSrc} alt={imgAlt} width={600} height={400} className="h-auto w-full" />
            </div>
        </div>
    );
}
