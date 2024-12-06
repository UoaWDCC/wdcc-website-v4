import React, { AnchorHTMLAttributes } from "react";

import { cn } from "@/libs/utils";

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    mode?: "light" | "dark";
    shift?: boolean;
}

const NavLink = ({ mode = "dark", shift, ...props }: AnchorProps) => {
    return (
        <a {...props} className={cn("group w-min", props.className)}>
            <p className={cn(shift && "transition-[padding-left] group-hover:pl-1")}>{props.children}</p>
            <div
                className={cn(
                    "h-0.5 w-0 rounded transition-[width,padding] group-hover:w-1/2",
                    mode === "light" ? "bg-white" : "bg-black"
                )}
            />
        </a>
    );
};

export { NavLink };
