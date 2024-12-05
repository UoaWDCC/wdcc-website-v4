import React from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

type StandardPageLayoutProps = {
    children: React.ReactNode;
    className?: string;
};

export default function StandardPageLayout({ children, className = "" }: StandardPageLayoutProps) {
    return (
        <div className={`flex min-h-full flex-col ${className}`}>
            <Navbar />
            <main>{children}</main>
            {/* Combination of min-h-full and mt-auto ensures footer doesn't collapse above screen bottom on small pages. */}
            <Footer className="mt-auto" />
        </div>
    );
}
