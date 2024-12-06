import React from "react";

import { FooterLink } from "./FooterDesc";

const FooterBlock = ({ ...data }: FooterLink) => {
    return (
        <div className="flex flex-col">
            {/* todo: replace font with real foreground value */}
            <strong className="mb-4 border-b border-white/70 py-4 text-lg text-wdcc-yellow sm:mb-1 sm:border-none sm:pb-0 sm:text-white/70">
                {data.title}
            </strong>
            <div className="flex flex-col border-b border-white/70 pb-4 sm:border-none sm:pb-0">
                {data.links.map((link) => (
                    <a
                        key={link.href}
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
