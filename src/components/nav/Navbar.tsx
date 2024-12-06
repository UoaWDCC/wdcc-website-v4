import { HtmlHTMLAttributes } from "react";
import Link from "next/link";

import navLinks from "@/data/navLinks.json";
import { cn } from "@/libs/utils";

export default function Navbar({ ...props }: HtmlHTMLAttributes<HTMLElement>) {
    return (
        <header {...props} className={cn("flex w-full justify-between bg-blue-600", props.className)}>
            Navbar
            <ul className="flex gap-10">
                {navLinks.map((link) => (
                    <NavLink key={link.href} href={link.href} external={link.external}>
                        {link.label}
                    </NavLink>
                ))}
            </ul>
        </header>
    );
}

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
    external?: boolean;
};

function NavLink({ href, external, children }: NavLinkProps) {
    const target = external ? "_blank" : undefined; // Open in new tab if external

    return (
        <li>
            <Link href={href} target={target} rel="noopener noreferrer">
                {children}
            </Link>
        </li>
    );
}
