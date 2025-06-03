// import { ReactNode } from "react";
import { ReactNode } from "react";
import Link from "next/link";

import Arrow from "@/assets/svg/Arrow";
import { Button } from "@/components/primitives/Button";

interface HeaderProps {
    title: string;
    description?: string;
    primaryButton?: {
        label: ReactNode;
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
}

/**
 * Project header description tba
 */
export default function ProjectHeader({ title, description, primaryButton, secondaryButton, backlink }: HeaderProps) {
    return (
        <header className="mx-[-14%] mt-24 flex items-center justify-center bg-blue-50 py-12 md:rounded-3xl md:py-20">
            <div className="flex w-[80%] max-w-[1100px] gap-10">
                <div className="hidden w-2 rounded-full bg-blue-400 md:block"></div>
                <div className="flex flex-col gap-4">
                    <div className="flex max-w-[700px] flex-col gap-4">
                        {backlink && (
                            <Link
                                href={backlink.href}
                                className="font-semibold text-blue-600 transition duration-300 will-change-auto hover:translate-x-2 hover:opacity-[0.8] hover:duration-150 motion-reduce:transition-none motion-reduce:hover:transform-none"
                            >
                                <Arrow className="rotate-180" /> {backlink.label}
                            </Link>
                        )}
                        <h1 className="text-3xl leading-none font-bold tracking-tight md:text-4xl">{title}</h1>
                        <p className="text-md leading-tight text-gray-600">{description}</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
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
                    </div>
                </div>
            </div>
        </header>
    );
}
