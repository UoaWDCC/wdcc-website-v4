import { HTMLAttributes } from "react";

import DiscordLogo from "@/assets/svg/DiscordLogo";
import { cn } from "@/libs/utils";

import { Button } from "../../primitives/Button";

interface FooterSocialsProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export default function FooterSocials({ className, ...props }: FooterSocialsProps) {
    return (
        <div {...props} className={cn("flex w-full items-center justify-between", className)}>
            <DiscordLogo className="fill-white" />
            <Button variant="primary" color="blue">
                Back to Top
            </Button>
        </div>
    );
}
