import React, { HTMLAttributes, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

import { cn } from "@/libs/utils";

const highlightblock = tv({
    base: "flex justify-center leading-tight rounded-2xl px-9 py-3 text-gray-800",
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

interface highlightProps extends HTMLAttributes<HTMLDivElement> {
    variant?: VariantProps<typeof highlightblock>;
    children: ReactNode;
}

const HighlightBlock = ({ variant, children, ...props }: highlightProps) => {
    return (
        <div {...props} className={cn(highlightblock(variant), props.className)}>
            {children}
        </div>
    );
};

export default HighlightBlock;
