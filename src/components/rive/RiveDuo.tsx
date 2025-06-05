import { ReactNode } from "react";

import RiveWrapper from "@/components/rive/RiveWrapper";
import { cn } from "@/libs/utils";

type DuoProps = {
    children: ReactNode;
    rive: {
        src: string;
        isPlaying: boolean;
    };
    largeAnim?: boolean;
    imgFirst?: boolean;
};

export default function RiveDuo({ children, rive, largeAnim = false, imgFirst = false }: DuoProps) {
    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center text-center lg:flex-row lg:text-left",
                largeAnim ? "gap-8 xl:gap-18" : "gap-16 xl:gap-32"
            )}
        >
            <div className={cn("order-2 flex w-full flex-1 flex-col gap-y-6", imgFirst ? "lg:order-2" : "lg:order-1")}>
                {children}
            </div>
            <div
                className={cn(
                    "order-1 overflow-hidden rounded-xl",
                    imgFirst ? "lg:order-1" : "lg:order-2",
                    largeAnim ? "h-[250px] w-[500px] md:h-[350px] md:w-[600px]" : "h-[300px] w-[450px]"
                )}
            >
                <RiveWrapper src={rive.src} isPlaying={rive.isPlaying} />
            </div>
        </div>
    );
}
