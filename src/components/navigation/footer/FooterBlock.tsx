import React from "react";

import type { FooterLink } from "@/types/navigation";

import { cn } from "@/libs/utils";

import { PageLink } from "@/components/primitives/Anchor";

const FooterBlock = ({ last, ...data }: FooterLink & { last?: boolean }) => {
    return (
        <div className="flex select-none flex-col">
            {/* todo: replace font with real foreground value */}
            <strong className="text-wdcc-yellow mb-4 border-b border-white/70 py-4 text-lg sm:mb-1 sm:border-none sm:pb-0 sm:text-white/70">
                {data.title}
            </strong>
            <div className={cn("flex flex-col border-white/70 pb-4 sm:border-none sm:pb-0", last && "border-none")}>
                {data.links.map((link) => (
                    <PageLink
                        key={link.label}
                        href={link.href}
                        target={link.external ? "_blank" : "_self"}
                        mode="light"
                        shift
                    >
                        {link.label}
                    </PageLink>
                ))}
            </div>
        </div>
    );
};

export default FooterBlock;
