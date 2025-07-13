import { ReactNode } from "react";
import { notFound } from "next/navigation";

export default function TestLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    if (process.env.NODE_ENV === "production") {
        notFound();
    }

    return children;
}
