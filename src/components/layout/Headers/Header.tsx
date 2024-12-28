/*
General global header component - used to provide general headings for all (or most) content pages.

Takes the following variants as props:
Variant [primary, secondary] - the hierarchical size and layout of the heading block.
Color [yellow, blue, green, purple, brand] - the color scheme and visual style of the heading block.

Takes the following additional props:
Title - the title.
Description - the description (primary variant only, optional)
primaryButton - the main action button (primary variant only, optional)
secondaryButton - the secondary action button (primary variant only, optional)
backlink - the backlink label and text (secondary variant only, optional)
graphic - an accompanying graphic TBA.
 */

// TODO showcase header and graphic

// import { ReactNode } from "react";
import { tv, VariantProps } from 'tailwind-variants';
import { Button } from "@/components/primitives/Button";

import Link from "next/link";

const header = tv({
    base: "flex w-full items-center justify-center",
    variants: {
        variant:{
            primary: "pt-36 pb-20",
            secondary: "pt-32 pb-16",
        },
        color: {
            yellow: "bg-orange-20",
            blue: "bg-blue-20",
            green: "bg-green-20",
            purple: "bg-purple-20",
            brand: "bg-blue-brand"
        }
    }
});

const bar = tv({
    base: "w-[8px] rounded-full",
    variants:{
        color:{
            yellow: "bg-yellow-300",
            blue: "bg-blue-400",
            green: "bg-green-300",
            purple: "bg-purple-300",
            brand: "bg-blue-750"
        }
    }
})

const backlinkvar = tv({
    base: "font-semibold transition duration-300 hover:duration-150 hover:translate-x-2 hover:opacity-[0.8] will-change-auto motion-reduce:transition-none motion-reduce:hover:transform-none",
    variants:{
        color:{
            yellow: "text-yellow-600",
            blue: "text-blue-600",
            green: "text-green-600",
            purple: "text-purple-600",
            brand: "text-white"
        }
    }
})

interface HeaderProps extends VariantProps<typeof header>{
    title: string;
    description?: string;
    primaryButton?: {
        label: string;
        href: string;
    };
    secondaryButton?: {
        label: string;
        href: string;
    };
    backlink?: {
        label: string;
        href: string;
    };
    // graphic?: string; TODO
}


export default function Header({ variant, color, title, description, primaryButton, secondaryButton, backlink}: HeaderProps) {
    return (
        <header className={header({variant, color})}>
            {variant === "primary"
                ? <div className="flex flex-col w-[80%] max-w-[1100px] gap-8">
                    <div className="flex flex-col gap-4 max-w-[700px]">
                        <h1 className="text-4xl font-bold leading-none tracking-tight">{title}</h1>
                        {description && <p className="text-gray-600 text-md leading-tight">{description}</p>}
                    </div>
                    <div className="flex gap-3">
                        {primaryButton && <Button variant="primary" color="yellow" href={primaryButton.href}>{primaryButton.label}</Button>}
                        {secondaryButton && <Button variant="secondary" color="dark" href={secondaryButton.href}>{secondaryButton.label}</Button>}
                    </div>
                </div>
                : <div className="flex w-[80%] max-w-[1100px] gap-8">
                    <div className={bar({color})}>

                    </div>
                    <div className="flex flex-col gap-3 py-3">
                        {backlink && <Link href={backlink.href} className={backlinkvar({color})}>← {backlink.label}</Link>}
                        <h1 className="text-4xl font-bold leading-none tracking-tight">{title}</h1>
                    </div>
                </div>
            }

        </header>
    );
}