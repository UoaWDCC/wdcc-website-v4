import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/libs/utils";

const anchor = tv({
    base: "flex items-center justify-center whitespace-nowrap",
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
    children?: ReactNode;
}

export const Anchor = ({ set, className, children, ...props }: AnchorProps) => {
    return (
        <Link {...props}>
            <p className={cn(anchor(set), className)}>{children}</p>
        </Link>
    );
};
