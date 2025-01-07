import { cn } from "@/libs/utils";

import { UnderlineLink } from "../UnderlineLink";
import type { FooterColumn } from "./_data/footerTypes";

export default function FooterColumn({ title, links }: FooterColumn) {
    return (
        <div className="flex select-none flex-col">
            <h3 className="mb-4 border-b border-white/70 py-4 text-lg font-bold sm:mb-1 sm:border-none sm:pb-0 text-blue-150">
                {title}
            </h3>
            <div className={cn("flex flex-col")}>
                {links.map((link) => (
                    <UnderlineLink key={link.label} href={link.href} newTab={link.external} mode="light" shift>
                        {link.label}
                    </UnderlineLink>
                ))}
            </div>
        </div>
    );
}