import React, { HtmlHTMLAttributes } from "react";

import { cn } from "@/libs/utils";

type BlankPageLayoutProps = {
    children: React.ReactNode;
} & HtmlHTMLAttributes<HTMLElement>;

export default function BlankPageLayout({ children, ...props }: BlankPageLayoutProps) {
    return (
        <div {...props} className={cn("flex min-h-full flex-col", props.className)}>
            <div className="relative flex h-dvh min-h-dvh flex-col overflow-x-hidden">{children}</div>
        </div>
    );
}
