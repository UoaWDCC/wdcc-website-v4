"use client";

import { cn } from "@/utils/misc";
import { HtmlHTMLAttributes, ReactNode } from "react";
import { useScroll } from "../../contexts/ScrollContext";
import Footer from "../footer/Footer";
import NavigationBar from "../navigation/navbar/NavigationBar";

type StandardPageLayoutProps = {
    children: ReactNode;
    navColor?: "light" | "dark";
} & HtmlHTMLAttributes<HTMLElement>;

/** This component replaces a typical layout.tsx - allowing us to benefit from a consistent layout, but also optionally disable it. */
export default function StandardPageLayout({ children, navColor = "light", ...props }: StandardPageLayoutProps) {
    const { scrollRef } = useScroll();

    return (
        <div {...props} className={cn("flex min-h-dvh flex-col", props.className)}>
            <div ref={scrollRef} className="relative flex h-dvh min-h-dvh flex-col overflow-x-hidden">
                <div className="z-10 w-full">
                    <NavigationBar variant={{ color: navColor }} />
                </div>
                <main className="responsive-body grow">{children}</main>
                {/* Combination of min-h-dvh and mt-auto ensures footer doesn't collapse above screen bottom on small pages. */}
                <Footer className="mt-auto" />
            </div>
        </div>
    );
}
