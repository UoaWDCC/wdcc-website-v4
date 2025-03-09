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
        <div className={cn("flex flex-col items-center justify-center lg:flex-row", largeAnim ? "gap-x-18" : "gap-x-32")}>
            <div className={cn("order-2 flex w-full flex-1 flex-col gap-y-6", imgFirst ? "lg:order-2" : "lg:order-1")}>
                {children}
            </div>
            <div
                className={cn(
                    "order-1 rounded-xl overflow-hidden",
                    imgFirst ? "lg:order-1" : "lg:order-2", largeAnim ? "w-[600px] h-[350px]" : "w-[450px] h-[300px]"
                )}
            >
                <RiveWrapper src={rive.src} isPlaying={rive.isPlaying}/>
            </div>
        </div>
    );
}
