import type { Metadata } from "next";

import "@/styles/global.css";

import { figtree, geistMono, geistSans } from "@/fonts";

export const metadata: Metadata = {
    title: "Web Development & Consulting Club",
    description:
        "WDCC (Web Development & Consulting Club Incorporated) is a not-for-profit organisation, that aims to bridge the gap between university knowledge and real-world industry practices.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.className} ${geistMono.variable} ${figtree.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
