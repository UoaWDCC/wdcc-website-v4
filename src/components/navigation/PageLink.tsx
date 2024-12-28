import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";

import { cn } from "@/libs/utils";

interface PageLinkProps extends LinkProps {
    // underline color
    mode?: "light" | "dark";
    // animate padding left on hover
    shift?: boolean;
    children?: ReactNode;
    newTab?: boolean;
}

export const PageLink = ({ children, newTab = false, mode = "dark", shift, ...props }: PageLinkProps) => {
    return (
        <Link {...props} target={newTab ? "_blank" : "_self"}>
            <div className="group z-10 w-min">
                <p className={cn(shift && "transition-[padding-left] group-hover:pl-1")}>{children}</p>
                <div
                    className={cn(
                        "pointer-events-none h-0.5 w-0 rounded transition-[width,padding] group-hover:w-1/2",
                        mode === "light" ? "bg-blue-100" : "bg-blue-950"
                    )}
                />
            </div>
        </Link>
    );
};
