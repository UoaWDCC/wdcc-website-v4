import { ScrollProvider } from "@/components/scroll/ScrollContext";
import { figtree } from "@/fonts";

import "@/styles/global.css";

import { ReactNode } from "react";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

// SEO
export const metadata: Metadata = {
    title: "Web Development & Consulting Club",
    icons: {
        icon: "./favicon.ico",
    },
    description:
        "WDCC (Web Development & Consulting Club Incorporated) is a not-for-profit organisation, that aims to bridge the gap between university knowledge and real-world industry practices.",

    keywords: ["Web Development & Consulting Club", "WDCC", "WDCC website", "WDCC UOA", "WDCCUoa", "UOA", "UoA WDCC"],

    // description display for when you post the link on social media
    openGraph: {
        title: "Web Development & Consulting Club",
        description:
            "WDCC (Web Development & Consulting Club Incorporated) is a not-for-profit organisation, that aims to bridge the gap between university knowledge and real-world industry practices.",
        url: "https://wdcc.co.nz/",
        images: "https://wdcc-website-v4-staging.fly.dev/images/og-image.png",
        siteName: "Web Development & Consulting Club",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${figtree.className} antialiased`}>
                <ScrollProvider>{children}</ScrollProvider>
            </body>
        </html>
    );
}
