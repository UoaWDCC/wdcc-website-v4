// import { ReactNode } from "react";
import Link from "next/link";
import { tv, VariantProps } from "tailwind-variants";

import Arrow from "@/assets/svg/Arrow";

const header = tv({
    base: "flex w-full items-center justify-center pt-36 pb-20",
    variants: {
        color: {
            purple: "",
            blue: "",
            green: "",
            yellow: "",
        },
    },
});

const backlinkvar = tv({
    base: "font-semibold transition duration-300 will-change-auto hover:translate-x-2 hover:opacity-[0.8] hover:duration-150 motion-reduce:transition-none motion-reduce:hover:transform-none",
    variants: {
        color: {
            yellow: "text-yellow-100",
            blue: "text-blue-100",
            green: "text-green-100",
            purple: "text-purple-100",
            brand: "text-white",
        },
    },
});

const categorypill = tv({
    base: "w-fit rounded-full px-5 py-2 leading-none font-bold tracking-tight text-gray-800",
    variants: {
        color: {
            yellow: "bg-yellow-150",
            blue: "bg-blue-150",
            green: "bg-green-150",
            purple: "bg-purple-150",
            brand: "text-white",
        },
    },
});

type HeaderProps = {
    variant?: VariantProps<typeof header>;
    title: string;
    role: string;
    description1?: string;
    description2?: string;
    backlink: {
        label: string;
        href: string;
    };
};

export default function RolesHeader({
    variant = { color: "blue" },
    title,
    role,
    description1,
    description2,
    backlink,
}: HeaderProps) {
    return (
        <header className={header({ ...variant })}>
            <div className="grid gap-8 lg:grid-cols-2">
                <div className="flex flex-col gap-3">
                    <Link href={backlink.href} className={backlinkvar({ color: variant.color })}>
                        <Arrow className="rotate-180" /> {backlink.label}
                    </Link>
                    <div className={categorypill({ ...variant })}>
                        <p>the {role} role</p>
                    </div>
                    <h1 className="text-5xl leading-[1.05] font-bold tracking-tight text-white">{title}</h1>
                </div>
                <div className="flex h-full flex-col justify-end gap-5">
                    <p className="text-lg leading-tight font-semibold text-white">{description1}</p>
                    <p className="text-lg leading-tight font-semibold text-white">{description2}</p>
                </div>
            </div>
        </header>
    );
}
