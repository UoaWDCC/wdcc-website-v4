import { cn } from "@/utils/misc";
import { UnderlineLink } from "../../../old/UnderlineLink";
import type { FooterColumn } from "../data/footerTypes";

export default function FooterColumn({ title, links }: FooterColumn) {
    return (
        <div className="flex flex-col gap-2 select-none">
            <h3 className="text-md text-blue-150 border-b border-white/70 font-bold sm:border-none">{title}</h3>
            <div className={cn("font-base flex flex-col")}>
                {links.map((link) => (
                    <UnderlineLink key={link.label} href={link.href} newTab={link.external} mode="light" shift>
                        {link.label}
                    </UnderlineLink>
                ))}
            </div>
        </div>
    );
}
