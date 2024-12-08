import React from "react";
import Link, { LinkProps } from "next/link";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/libs/utils";

const anchor = tv({
    base: "flex items-center justify-center whitespace-nowrap px-3 py-2",
    variants: {
        type: {
            primary: "bg-blue-500 text-white",
            secondary: "bg-yellow-300 text-white",
            muted: "bg-blue-100 text-blue-750",
            ghost: "bg-transparent text-black",
            icon: "flex items-center justify-center rounded-full bg-blue-950 px-4 py-2.5",
        },
        rounded: {
            true: "rounded-full",
        },
    },
});

interface AnchorProps extends LinkProps<HTMLAnchorElement> {
    set?: VariantProps<typeof anchor>;
    className?: string;
    children?: React.ReactNode;
}

const Anchor = ({ set, className, children, ...props }: AnchorProps) => {
    return (
        <Link {...props}>
            <p className={cn(anchor(set), className)}>{children}</p>
        </Link>
    );
};

interface PageLinkProps extends LinkProps {
    // underline color
    mode?: "light" | "dark";
    // animate padding left on hover
    shift?: boolean;
    children?: React.ReactNode;
    target?: string;
}

const PageLink = ({ children, target = "_self", mode = "dark", shift, ...props }: PageLinkProps) => {
    return (
        <Link {...props} target={target}>
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

export { Anchor, PageLink };
