import { HTMLAttributes } from "react";

import DiscordLogo from "@/assets/svg/DiscordLogo";
import { cn } from "@/libs/utils";

import { Button } from "../../primitives/Button";

interface FooterSocialsProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export default function FooterSocials({ className, ...props }: FooterSocialsProps) {
    return (
        <div {...props} className={cn("flex w-full flex-col", className)}>
            <div className="h-1 w-full rounded-full bg-gradient-to-br from-blue-brand to-blue-750" />
            <div className="mt-8 flex w-full items-center justify-between">
                <DiscordLogo className="fill-white" />
                <Button variant="primary" color="blue">
                    Back to Top
                </Button>
            </div>
        </div>
    );
}
