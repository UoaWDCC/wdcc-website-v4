
// import { ReactNode } from "react";
import Link from "next/link";
import { tv, VariantProps } from "tailwind-variants";

import Arrow from "@/assets/svg/Arrow";

const header = tv({
    base: "flex w-full items-center justify-center pb-20 pt-36",
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
    base:"w-fit text-gray-800 font-bold rounded-full py-2 px-5 leading-none tracking-tight",
    variants: {
        color: {
            yellow: "bg-yellow-150",
            blue: "bg-blue-150",
            green: "bg-green-150",
            purple: "bg-purple-150",
            brand: "text-white",
        },
    },
})


interface HeaderProps {
    variant?: VariantProps<typeof header>;
    title: string;
    role: string;
    description1?: string;
    description2?: string;
    backlink: {
        label: string;
        href: string;
    };
    // graphic?: string; TODO
}

export default function RolesHeader({ variant = { color: "blue" }, title, role, description1, description2, backlink, }: HeaderProps) {
    return (
        <header className={header({...variant})}>
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                    <Link href={backlink.href} className={backlinkvar({ color: variant.color })}>
                        <Arrow className="rotate-180" /> {backlink.label}
                    </Link>
                    <div className={categorypill({...variant})}>
                        <p>the {role} role</p>
                    </div>
                    <h1 className="text-white font-bold text-5xl leading-[1.05] tracking-tight">
                        {title}
                    </h1>
                </div>
                <div className="h-full flex flex-col gap-5 justify-end">
                    <p className="text-lg font-semibold text-white leading-tight">
                        {description1}
                    </p>
                    <p className="text-lg font-semibold text-white leading-tight">
                        {description2}
                    </p>
                </div>
            </div>
        </header>
    )

}
