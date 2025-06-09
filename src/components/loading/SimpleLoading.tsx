import React, { HTMLAttributes } from "react";

import { VariantProps, tv } from "tailwind-variants";

import { cn } from "@/libs/utils";

const loading = tv({
    base: "h-3 w-3 animate-bounce rounded-full bg-white",
    variants: {
        color: {
            default: "bg-white",
            yellow: "bg-orange-brand",
            blue: "bg-blue-brand",
            green: "bg-green-brand",
            purple: "bg-purple-brand",
        },
    },
    defaultVariants: {
        color: "default",
    },
});

type SimpleLoadingProps = {
    variant?: VariantProps<typeof loading>;
} & HTMLAttributes<HTMLDivElement>;

const SimpleLoading = ({ variant, ...props }: SimpleLoadingProps) => {
    return (
        <div {...props} className={cn("flex space-x-2", props.className)}>
            {[0, 1, 2].map((i) => (
                <div
                    key={i}
                    className={loading({ color: variant?.color })}
                    style={{
                        animationDelay: `${i * 0.15}s`,
                    }}
                />
            ))}
        </div>
    );
};

export default SimpleLoading;
