import React, { HtmlHTMLAttributes } from "react";

import { cn } from "@/libs/utils";
import Footer from "./Footer";
import Navbar from "./Navbar";

type StandardPageLayoutProps = {
    children: React.ReactNode;
} & HtmlHTMLAttributes<HTMLElement>;

export default function StandardPageLayout({ children, ...props }: StandardPageLayoutProps) {
    return (
        <div {...props} className={cn("flex min-h-full flex-col", props.className)}>
            <Navbar />
            <main>{children}</main>
            {/* Combination of min-h-full and mt-auto ensures footer doesn't collapse above screen bottom on small pages. */}
            <Footer className="mt-auto" />
        </div>
    );
}
