import { ComponentProps } from "react";
import Image from "next/image";
import { cn } from "@/utils/misc";

type WDCCLogoProps = Omit<ComponentProps<typeof Image>, "src" | "alt"> & {
    alt?: string;
};

const WDCCLogo = ({ className, width = 105, height = 34, alt = "WDCC Logo", ...props }: WDCCLogoProps) => {
    return (
        <Image
            src="/brand/wdcc-logo-26.png"
            alt={alt}
            width={width}
            height={height}
            className={cn("h-auto w-[105px]", className)}
            {...props}
        />
    );
};

export default WDCCLogo;
