import { HtmlHTMLAttributes } from "react";
import { cn } from "@/utils/misc";

type ProjectTagProps = {
    tagText: string;
} & HtmlHTMLAttributes<HTMLElement>;
export function ProjectTag({ tagText, ...props }: ProjectTagProps) {
    return (
        <div {...props} className={cn(`rounded-2xl px-4 py-1 text-sm font-bold`, props.className)}>
            {tagText}
        </div>
    );
}
