"use client";

import { HTMLAttributes } from "react";

import { Anchor } from "@/components/primitives/Anchor";
import { useScroll } from "@/components/scroll/ScrollContext";
import { cn } from "@/libs/utils";

import { Button } from "../../primitives/Button";
import { FooterSocial } from "./_data/footerTypes";

interface FooterSocialsProps extends HTMLAttributes<HTMLDivElement> {
    socials: FooterSocial[];
    className?: string;
}

export default function FooterSocials({ socials, className, ...props }: FooterSocialsProps) {
    const { scrollTo } = useScroll();

    return (
        <div {...props} className={cn("flex w-full items-center justify-center gap-6", className)}>
            {socials.map((social) => (
                <Anchor
                    key={social.name}
                    href={social.href}
                    className="[&>svg]:fill-white [&>svg]:transition [&>svg]:duration-200 [&>svg]:hover:fill-blue-200"
                >
                    {social.icon}
                </Anchor>
            ))}
            <Button variant={{ color: "blue" }} onClick={() => scrollTo(0)} className="ml-auto hidden sm:block">
                Back to Top
            </Button>
        </div>
    );
}
