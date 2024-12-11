import { HTMLAttributes } from "react";

import { cn } from "@/libs/utils";

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
    children: string;
}

/* Text component for consistancy and easy changing - regular p text */
export default function Text({ children, ...props }: TextProps) {
    return (
        <span {...props} className={cn("", props.className)}>
            {children}
        </span>
    );
}