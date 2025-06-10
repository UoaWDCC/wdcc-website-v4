import React from "react";

import Link from "next/link";

import SectionHeader from "@/components/section/SectionHeader";

const testpages = [
    { label: "header", href: "/test/header" },
    { label: "Sponsors", href: "/test/sponsors" },
    { label: "Buttons", href: "/test/buttons" },
];

const page = () => {
    return (
        <div className="flex h-dvh flex-col items-center justify-center gap-8">
            <SectionHeader>Demo pages</SectionHeader>
            <div className="grid w-[600px] grid-cols-3 gap-4">
                {testpages.map((link, i) => (
                    <Link href={link.href} key={i}>
                        <div className="rounded-xl border p-4">{link.label}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default page;
