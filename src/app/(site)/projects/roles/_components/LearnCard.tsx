// import { ReactNode } from "react";
import Image, {StaticImageData} from 'next/image';

interface props {
    title: string,
    description: string,
    graphic?: StaticImageData
}

export default function LearnCard({ title, description, graphic }: props) {
    return (
        <div className="w-full rounded-2xl px-4 text-white flex flex-col gap-4">
            {graphic ?
                <div className="w-full rounded-xl relative overflow-hidden">
                    <Image src={graphic} alt="" height={1000}/>
                </div>
                :
                <div className="bg-white w-full rounded-xl h-[200px]"></div>
            }
            <div className="flex flex-col gap-1 text-left">
            <p className="font-semibold text-xl">
                    {title}
                </p>
                <p className="leading-tight opacity-80">
                    {description}
                </p>
            </div>
        </div>
    )

}
