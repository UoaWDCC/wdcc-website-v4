// import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface props {
    title: string;
    description: string;
    graphic?: StaticImageData;
}

export default function LearnCard({ title, description, graphic }: props) {
    return (
        <div className="flex w-full flex-col gap-4 rounded-2xl px-4 text-white">
            {graphic ? (
                <div className="relative w-full overflow-hidden rounded-xl">
                    <Image src={graphic} alt="" height={1000} />
                </div>
            ) : (
                <div className="h-[200px] w-full rounded-xl bg-white"></div>
            )}
            <div className="flex flex-col gap-1 text-left">
                <p className="text-xl font-semibold">{title}</p>
                <p className="leading-tight opacity-80">{description}</p>
            </div>
        </div>
    );
}
