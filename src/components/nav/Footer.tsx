import { HtmlHTMLAttributes } from "react";

import { cn } from "@/libs/utils";

export default function Footer({ ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
    return (
        <footer {...props} className={cn("w-full bg-blue-600", props.className)}>
            Footer
        </footer>
    );
}
