import { cn } from "@/libs/utils";

import { UnderlineLink } from "../UnderlineLink";
import type { FooterColumn } from "./_data/footerTypes";

interface FooterColumnProps extends FooterColumn {
    last?: boolean;
}

export default function FooterColumn({ last, title, links }: FooterColumnProps) {
    return (
        <div className="flex select-none flex-col">
            {/* todo: replace font with real foreground value */}
            <h3 className="font-bold text-wdcc-yellow mb-4 border-b border-white/70 py-4 text-lg sm:mb-1 sm:border-none sm:pb-0 sm:text-blue-150">
                {title}
            </h3>
            {/* last column has no bottom border on mobile */}
            <div className={cn("flex flex-col border-white/70 pb-4 sm:border-none sm:pb-0", last && "border-none")}>
                {links.map((link) => (
                    <UnderlineLink key={link.label} href={link.href} newTab={link.external} mode="light" shift>
                        {link.label}
                    </UnderlineLink>
                ))}
            </div>
        </div>
    );
}
