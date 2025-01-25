import { cn } from "@/libs/utils";

import { UnderlineLink } from "../UnderlineLink";
import type { FooterColumn } from "./_data/footerTypes";

export default function FooterColumn({ title, links }: FooterColumn) {
    return (
        <div className="flex select-none flex-col gap-2">
            <h3 className="border-b border-white/70 text-md font-bold text-blue-150 sm:border-none">
                {title}
            </h3>
            <div className={cn("flex flex-col font-base")}>
                {links.map((link) => (
                    <UnderlineLink key={link.label} href={link.href} newTab={link.external} mode="light" shift>
                        {link.label}
                    </UnderlineLink>
                ))}
            </div>
        </div>
    );
}
