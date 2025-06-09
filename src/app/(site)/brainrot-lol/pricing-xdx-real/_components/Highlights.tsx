import React, { HTMLAttributes, ReactNode } from "react";

import { VariantProps, tv } from "tailwind-variants";

import { cn } from "@/libs/utils";

const highlightblock = tv({
    base: "flex justify-center rounded-2xl px-9 py-3 leading-tight text-gray-800",
    variants: {
        color: {
            yellow: "bg-yellow-100",
            red: "bg-red-100",
        },
    },
    defaultVariants: {
        color: "yellow",
    },
});

type highlightProps = {
    variant?: VariantProps<typeof highlightblock>;
    children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const HighlightBlock = ({ variant, children, ...props }: highlightProps) => {
    return (
        <div {...props} className={cn(highlightblock(variant), props.className)}>
            {children}
        </div>
    );
};

export default HighlightBlock;
