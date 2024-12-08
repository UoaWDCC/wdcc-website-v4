import React, { HtmlHTMLAttributes } from "react";

import { cn } from "@/libs/utils";
import FooterLinks from "./FooterLinks";
import NavigationBar from "./NavigationBar";

type StandardPageLayoutProps = {
    children: React.ReactNode;
} & HtmlHTMLAttributes<HTMLElement>;

export default function StandardPageLayout({ children, ...props }: StandardPageLayoutProps) {
    return (
        <div {...props} className={cn("flex min-h-full flex-col", props.className)}>
            <div className="relative flex h-dvh min-h-dvh flex-col overflow-x-hidden">
                <NavigationBar className="px-12 pt-8" />
                <main className="relative flex flex-col justify-between">{children}</main>
                {/* Combination of min-h-full and mt-auto ensures footer doesn't collapse above screen bottom on small pages. */}
                <FooterLinks />
            </div>
        </div>
    );
}
