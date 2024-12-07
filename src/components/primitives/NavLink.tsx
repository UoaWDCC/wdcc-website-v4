import React, { AnchorHTMLAttributes } from "react";

import { cn } from "@/libs/utils";

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    mode?: "light" | "dark";
    shift?: boolean;
}

const NavLink = ({ mode = "dark", shift, ...props }: AnchorProps) => {
    // todo: This should probably be a next navigation link
    return (
        <a {...props} className={cn("group z-10 w-min", props.className)}>
            <p className={cn(shift && "transition-[padding-left] group-hover:pl-1")}>{props.children}</p>
            <div
                className={cn(
                    "h-0.5 w-0 rounded transition-[width,padding] group-hover:w-1/2",
                    mode === "light" ? "bg-blue-100" : "bg-blue-950"
                )}
            />
        </a>
    );
};

export { NavLink };
