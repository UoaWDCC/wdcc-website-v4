import Image from "next/image";

interface DuoProps {
    title: string;
    content: string;
    imgSrc?: string;
    imgAlt?: string;
    imgFirst?: boolean;
}

export default function Duo({
    title,
    content,
    imgSrc = "https://placehold.co/600x400.png",
    imgAlt = `${title}`,
    imgFirst = false,
}: DuoProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-x-48 gap-y-8 md:flex-row">
            <div className={`order-2 flex-1 ${imgFirst ? "md:order-2" : "md:order-1"}`}>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="whitespace-pre-line">{content}</p>
            </div>
            <div
                className={`order-1 flex flex-1 items-center justify-center ${imgFirst ? "md:order-1" : "md:order-2"}`}
            >
                <Image src={imgSrc} alt={imgAlt} width={0} height={0} sizes="100vw" className="h-auto w-full" />
            </div>
        </div>
    );
}
