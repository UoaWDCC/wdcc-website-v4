import React from "react";

import { cn } from "@/libs/utils";
import { FooterLink } from "./FooterLinks";

const FooterBlock = ({ last, ...data }: FooterLink & { last?: boolean }) => {
    return (
        <div className="flex flex-col">
            {/* todo: replace font with real foreground value */}
            <strong className="mb-4 border-b border-white/70 py-4 text-lg text-wdcc-yellow sm:mb-1 sm:border-none sm:pb-0 sm:text-white/70">
                {data.title}
            </strong>
            <div
                className={cn(
                    "flex flex-col border-b border-white/70 pb-4 sm:border-none sm:pb-0",
                    last && "border-none"
                )}
            >
                {data.links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target={link.external ? "_blank" : "_self"}
                        className="block hover:underline"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FooterBlock;
