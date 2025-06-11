import { ReactNode } from "react";
import RootLayout from "@main/layout";

export default function MiscRootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return <RootLayout>{children}</RootLayout>;
}
