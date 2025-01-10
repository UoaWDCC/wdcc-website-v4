import { HtmlHTMLAttributes, ReactNode } from "react";

import { cn } from "@/libs/utils";

import Footer from "./navigation/footer/Footer";
import NavigationBar from "./navigation/navbar/NavigationBar";

interface StandardPageLayoutProps extends HtmlHTMLAttributes<HTMLElement> {
    children: ReactNode;
}

/** This component replaces a typical layout.tsx - allowing us to benefit from a consistent layout, but also optionally disable it. */
export default function StandardPageLayout({ children, ...props }: StandardPageLayoutProps) {
    return (
        <div {...props} className={cn("flex min-h-full flex-col", props.className)}>
            <div className="relative flex h-dvh min-h-dvh flex-col overflow-x-hidden">
                <div className="fixed w-full top-0 z-10">
                    <NavigationBar />
                </div>
                <main className="relative flex flex-col justify-between">{children}</main>
                {/* Combination of min-h-full and mt-auto ensures footer doesn't collapse above screen bottom on small pages. */}
                <Footer className="mt-auto" />
            </div>
        </div>
    );
}