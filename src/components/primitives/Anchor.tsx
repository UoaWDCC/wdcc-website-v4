import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { type VariantProps, tv } from "tailwind-variants";
import { cn } from "@/utils/misc";

const anchor = tv({
    base: "flex items-center justify-center whitespace-nowrap",
    variants: {
        type: {
            primary: "bg-blue-500 text-white",
            secondary: "bg-yellow-300 text-white",
            muted: "text-blue-750 bg-blue-100",
            ghost: "bg-transparent text-black",
            icon: "flex items-center justify-center rounded-full bg-blue-950 px-4 py-2.5",
        },
        rounded: {
            true: "rounded-full",
        },
    },
});

type AnchorProps = {
    set?: VariantProps<typeof anchor>;
    className?: string;
    newTab?: boolean;
    children?: ReactNode;
} & LinkProps<HTMLAnchorElement>;

export const Anchor = ({ set, className, newTab = false, children, ...props }: AnchorProps) => {
    return (
        <Link {...props} target={newTab ? "_blank" : "_self"}>
            <p className={cn(anchor(set), className)}>{children}</p>
        </Link>
    );
};
