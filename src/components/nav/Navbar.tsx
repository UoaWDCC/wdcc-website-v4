import { HtmlHTMLAttributes } from "react";
import Link from "next/link";

import { cn } from "@/libs/utils";

const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/events", label: "Events" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "https://go.wdcc.co.nz", label: "Linktree", external: true },
];

export default function Navbar({ ...props }: HtmlHTMLAttributes<HTMLElement>) {
    return (
        <header {...props} className={cn("flex w-full justify-between bg-blue-600", props.className)}>
            Navbar
            <ul className="flex gap-10">
                {links.map((link) => (
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