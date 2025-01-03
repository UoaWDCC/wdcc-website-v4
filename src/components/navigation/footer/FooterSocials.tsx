import { HTMLAttributes } from "react";

import { Anchor } from "@/components/primitives/Anchor";
import { cn } from "@/libs/utils";

import { Button } from "../../primitives/Button";
import { FooterSocial } from "./_data/footerTypes";

interface FooterSocialsProps extends HTMLAttributes<HTMLDivElement> {
    socials: FooterSocial[];
    className?: string;
}

export default function FooterSocials({ socials, className, ...props }: FooterSocialsProps) {
    return (
        <div {...props} className={cn("flex w-full items-center gap-6 px-2 overflow-x-auto", className)}>
            {socials.map((social) => (
                <Anchor key={social.name} href={social.href} newTab className="[&>svg]:fill-white">
                    {social.icon}
                </Anchor>
            ))}
            <Button variant="primary" color="blue" className="ml-auto">
                Back to Top
            </Button>
        </div>
    );
}
