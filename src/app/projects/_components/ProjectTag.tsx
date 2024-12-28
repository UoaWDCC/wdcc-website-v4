import React, { HtmlHTMLAttributes } from "react";

import { cn } from "@/libs/utils";

interface ProjectTagProps extends HtmlHTMLAttributes<HTMLElement> {
    tagText: string;
    color: string;
}
export function ProjectTag({ tagText, color, ...props }: ProjectTagProps) {
    return (
        <div {...props} className={cn(`rounded-2xl bg-${color} px-[18px] py-1`, props.className)}>
            {tagText}
        </div>
    );
}
