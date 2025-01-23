import type { Metadata } from "next";

import "@/styles/global.css";

import { ReactNode } from "react";

import { ThemeProvider } from "@/contexts/ThemeContext";
import { figtree } from "@/fonts";

export const metadata: Metadata = {
    title: "Web Development & Consulting Club",
    description:
        "WDCC (Web Development & Consulting Club Incorporated) is a not-for-profit organisation, that aims to bridge the gap between university knowledge and real-world industry practices.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <ThemeProvider>
                <body className={`${figtree.className} antialiased`}>{children}</body>
            </ThemeProvider>
        </html>
    );
}