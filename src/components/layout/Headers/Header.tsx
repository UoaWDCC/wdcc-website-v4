// TODO showcase version of header and graphic

// import { ReactNode } from "react";
import Link from "next/link";
import { tv, VariantProps } from "tailwind-variants";

import Arrow from "@/assets/svg/Arrow";
import { Button } from "@/components/primitives/Button";

const header = tv({
    base: "flex w-full items-center justify-center",
    variants: {
        style: {
            primary: "pb-20 pt-36",
            secondary: "pb-16 pt-32",
        },
        color: {
            yellow: "bg-orange-20",
            blue: "bg-blue-20",
            green: "bg-green-20",
            purple: "bg-purple-20",
            brand: "bg-blue-brand text-white",
        },
    },
});

const bar = tv({
    base: "w-[8px] rounded-full",
    variants: {
        color: {
            yellow: "bg-yellow-300",
            blue: "bg-blue-400",
            green: "bg-green-300",
            purple: "bg-purple-300",
            brand: "bg-blue-750",
        },
    },
});

const backlinkvar = tv({
    base: "font-semibold transition duration-300 will-change-auto hover:translate-x-2 hover:opacity-[0.8] hover:duration-150 motion-reduce:transition-none motion-reduce:hover:transform-none",
    variants: {
        color: {
            yellow: "text-yellow-600",
            blue: "text-blue-600",
            green: "text-green-600",
            purple: "text-purple-600",
            brand: "text-white",
        },
    },
});

interface HeaderProps {
    variant?: VariantProps<typeof header>;
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

/**
 * General global header component - used to provide general headings for all (or most) content pages.
 *
 * Takes the following parameters as props of variants:
 * @variation style [primary, secondary] - the hierarchical size and layout of the heading block.
 * @variation color [yellow, blue, green, purple, brand] - the color scheme and visual style of the heading block.
 *
 * Takes the following additional props:
 * @param Title - the title.
 * @param Description - the description (primary variant only, optional)
 * @param graphic - an accompanying graphic TBA.
 *
 * And the following link props:
 * @param primaryButton - the main action button (primary variant only, optional)
 * @param secondaryButton - the secondary action button (primary variant only, optional)
 * @param backlink - the backlink label and text (secondary variant only, optional)
 *
 * example usage:
 * <Header
 *     variant={{ style: "primary", color: "blue" }}
 *     title="projects"
 *     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis condimentum orci et congue. Donec at sagittis sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
 *     primaryButton={{ label: "Lorem ipsum dolor ⮕", href: "https://google.com" }}
 *     secondaryButton={{ label: "Lorem ipsum dolor", href: "/" }}
 * />
 *
 * Link props (as above) are objects of format:
 * {
 *   label: "xyz"
 *   href: "xyz"
 * }
 */
export default function Header({
    variant = { style: "primary", color: "yellow" },
    title,
    description,
    primaryButton,
    secondaryButton,
    backlink,
}: HeaderProps) {
    return (
        <header className={header({ ...variant })}>
            {variant.style === "primary" ? (
                <div className="flex w-[80%] max-w-[1100px] flex-col gap-8">
                    <div className="flex max-w-[700px] flex-col gap-4">
                        <h1 className="text-4xl font-bold leading-none tracking-tight">{title}</h1>
                        {variant.color !== "brand" ? (
                            <>{description && <p className="text-md leading-tight text-gray-600">{description}</p>}</>
                        ) : (
                            <>{description && <p className="text-md leading-tight text-white">{description}</p>}</>
                        )}
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {variant.color !== "brand" ? (
                            <>
                                {primaryButton && (
                                    <Button variant={{ style: "primary", color: "yellow" }} href={primaryButton.href}>
                                        {primaryButton.label}
                                    </Button>
                                )}
                                {secondaryButton && (
                                    <Button variant={{ style: "secondary", color: "dark" }} href={secondaryButton.href}>
                                        {secondaryButton.label}
                                    </Button>
                                )}
                            </>
                        ) : (
                            <>
                                {primaryButton && (
                                    <Button variant={{ style: "primary", color: "light" }} href={primaryButton.href}>
                                        {primaryButton.label}
                                    </Button>
                                )}
                                {secondaryButton && (
                                    <Button
                                        variant={{ style: "secondary", color: "light" }}
                                        href={secondaryButton.href}
                                    >
                                        {secondaryButton.label}
                                    </Button>
                                )}
                            </>
                        )}
                    </div>
                </div>
            ) : (
                <div className="flex w-[80%] max-w-[1100px] gap-8">
                    <div className={bar({ color: variant.color })}></div>
                    <div className="flex flex-col gap-3 py-3">
                        {backlink && (
                            <Link href={backlink.href} className={backlinkvar({ color: variant.color })}>
                                <Arrow className="rotate-180" /> {backlink.label}
                            </Link>
                        )}
                        <h1 className="text-4xl font-bold leading-none tracking-tight">{title}</h1>
                    </div>
                </div>
            )}
        </header>
    );
}
