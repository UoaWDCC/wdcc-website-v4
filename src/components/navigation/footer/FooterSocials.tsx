'use client'

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

    const isBrowser = () => typeof window !== 'undefined';

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    return (
        <div {...props} className={cn("flex w-full items-center justify-center gap-6", className)}>
            {socials.map((social) => (
                <Anchor key={social.name} href={social.href} className="[&>svg]:fill-white [&>svg]:transition [&>svg]:duration-200 hover:[&>svg]:fill-blue-200">
                    {social.icon}
                </Anchor>
            ))}
            <Button variant={{ color: "blue" }} onClick={scrollToTop} className="ml-auto hidden sm:block">
                Back to Top
            </Button>
        </div>
    );
}
