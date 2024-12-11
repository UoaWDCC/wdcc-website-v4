import { HtmlHTMLAttributes } from "react";

import { cn } from "@/libs/utils";

type HeaderProps = {
    children: string;
} & HtmlHTMLAttributes<HTMLSpanElement>;

/* Header component for consistancy and easy changing - bold 36px h1 text */
export default function Header({ children, ...props }: HeaderProps) {
    return (
        <span {...props} className={cn("text-2xl font-bold", props.className)}>
            {children}
        </span>
    );
}
