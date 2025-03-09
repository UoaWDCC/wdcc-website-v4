import { ReactNode } from "react";
import RiveWrapper from "@/components/rive/RiveWrapper";

import { cn } from "@/libs/utils";

interface DuoProps {
    children: ReactNode;
    rive: {
        src: string;
        isPlaying: boolean;
    };
    largeAnim?: boolean;
    imgFirst?: boolean;
}

export default function RiveDuo({ children, rive, largeAnim = false, imgFirst = false }: DuoProps) {
    return (
        <div className={cn("flex flex-col items-center justify-center text-center lg:text-left lg:flex-row", largeAnim ? "gap-8 xl:gap-18" : "gap-16 xl:gap-32")}>
            <div className={cn("order-2 flex w-full flex-1 flex-col gap-y-6", imgFirst ? "lg:order-2" : "lg:order-1")}>
                {children}
            </div>
            <div
                className={cn(
                    "order-1 rounded-xl overflow-hidden",
                    imgFirst ? "lg:order-1" : "lg:order-2", largeAnim ? "w-[500px] h-[250px] md:w-[600px] md:h-[350px]" : "w-[450px] h-[300px]"
                )}
            >
                <RiveWrapper src={rive.src} isPlaying={rive.isPlaying}/>
            </div>
        </div>
    );
}
