import type { FooterColumn } from "./_data/footerTypes";

import { cn } from "@/libs/utils";

import { UnderlineLink } from "../UnderlineLink";

interface FooterColumnProps extends FooterColumn {
    last?: boolean;
}

export default function FooterColumn({ last, ...data }: FooterColumnProps) {
    return (
        <div className="flex select-none flex-col">
            {/* todo: replace font with real foreground value */}
            <strong className="text-wdcc-yellow mb-4 border-b border-white/70 py-4 text-lg sm:mb-1 sm:border-none sm:pb-0 sm:text-white/70">
                {data.title}
            </strong>
            <div className={cn("flex flex-col border-white/70 pb-4 sm:border-none sm:pb-0", last && "border-none")}>
                {data.links.map((link) => (
                    <UnderlineLink key={link.label} href={link.href} newTab={link.external} mode="light" shift>
                        {link.label}
                    </UnderlineLink>
                ))}
            </div>
        </div>
    );
}
