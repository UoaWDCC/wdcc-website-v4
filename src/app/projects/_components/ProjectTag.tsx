import React, { HtmlHTMLAttributes } from "react";

import { cn } from "@/libs/utils";

interface ProjectTagProps extends HtmlHTMLAttributes<HTMLElement> {
    tagText: string;
}
export function ProjectTag({ tagText, ...props }: ProjectTagProps) {
    return (
        <div {...props} className={cn(`rounded-2xl px-4 py-1 text-sm font-bold`, props.className)}>
            {tagText}
        </div>
    );
}
