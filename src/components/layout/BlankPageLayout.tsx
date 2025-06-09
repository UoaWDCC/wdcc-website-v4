import { HtmlHTMLAttributes } from "react";

import { cn } from "@/utils/misc";

export default function BlankPageLayout({ children, ...props }: HtmlHTMLAttributes<HTMLElement>) {
    return (
        <div {...props} className={cn("flex min-h-full flex-col", props.className)}>
            <div className="relative flex h-dvh min-h-dvh flex-col overflow-x-hidden">{children}</div>
        </div>
    );
}
