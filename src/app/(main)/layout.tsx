import { ReactNode } from "react";
import type { Metadata } from "next";
import { figtree } from "@/assets/fonts";
import "@/assets/global.css";
import { ReduceMotionProvider, ScrollProvider, WebGLProvider } from "@/components/contexts";


// SEO
export const metadata: Metadata = {
    title: "Web, Design & Coding Club",
    icons: {
        icon: "./favicon.ico",
    },
    description:
        "WDCC (Web, Design & Coding Club) is a not-for-profit organisation, that aims to bridge the gap between university knowledge and real-world industry practices.",

    keywords: [
        "Web Development & Consulting Club",
        "Web, Design & Coding Club",
        "WDCC",
        "WDCC website",
        "WDCC UOA",
        "WDCCUoa",
        "UOA",
        "UoA WDCC",
    ],

    // Description display for when you post the link on social media
    openGraph: {
        title: "Web, Design & Coding Club",
        description:
            "WDCC (Web, Design & Coding Club) is a not-for-profit organisation, that aims to bridge the gap between university knowledge and real-world industry practices.",
        url: "https://wdcc.co.nz/",
        images: "https://wdcc.co.nz/images/og-image.png",
        siteName: "Web, Design & Coding Club",
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
                <ReduceMotionProvider>
                    <WebGLProvider>
                        <ScrollProvider>{children}</ScrollProvider>
                    </WebGLProvider>
                </ReduceMotionProvider>
            </body>
        </html>
    );
}
