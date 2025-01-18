// import { ReactNode } from "react";
import { ReactNode } from "react";
import Link from "next/link";

import Arrow from "@/assets/svg/Arrow";
import { Button } from "@/components/primitives/Button";

interface HeaderProps {
    title: string;
    description?: string;
    when?: string;
    where?: string;
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
 Project header description tba
 */

export default function EventHeader({
    title,
    description,
    when,
    where,
    primaryButton,
    secondaryButton,
    backlink,
}: HeaderProps) {
    return (
        <header className="py-20 mx-[-14%] bg-green-50 flex items-center justify-center rounded-3xl">
            <div className="flex w-[80%] max-w-[1100px] gap-8">
                <div className="w-[8px] bg-green-400 rounded-full"></div>
                <div className="flex flex-col gap-8">
                    <div className="flex max-w-[700px] flex-col gap-4">

                        {backlink && (
                            <Link href={backlink.href}
                                  className="text-green-600 font-semibold transition duration-300 will-change-auto hover:translate-x-2 hover:opacity-[0.8] hover:duration-150 motion-reduce:transition-none motion-reduce:hover:transform-none">
                                <Arrow className="rotate-180" /> {backlink.label}
                            </Link>
                        )}

                        <h1 className="text-4xl font-bold leading-none tracking-tight">{title}</h1>
                        <p className="text-md leading-tight text-gray-600">{description}</p>

                        <div className="flex flex-col">
                            {when && (
                                <>
                                    <p className="text-md leading-tight font-semibold">
                                        <span className="text-gray-600 italic">when </span>
                                        <span className="text-green-700">{when}</span>
                                    </p>
                                </>
                            )}
                            {where && (
                                <>
                                    <p className="text-md leading-tight font-semibold">
                                        <span className="text-gray-600 italic">where </span>
                                        <span className="text-green-700">{where}</span>
                                    </p>
                                </>
                            )}
                        </div>

                    </div>
                    <div className="flex flex-wrap gap-3">
                        {primaryButton && (
                            <Button variant={{ style: "primary", color: "yellow" }}
                                    href={primaryButton.href}>
                                {primaryButton.label}
                            </Button>
                        )}
                        {secondaryButton && (
                            <Button
                                variant={{ style: "secondary", color: "dark" }}
                                href={secondaryButton.href}
                            >
                                {secondaryButton.label}
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
