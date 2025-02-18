import React, { HTMLAttributes } from "react";

import { cn } from "@/libs/utils";

const SimpleLoading = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...props} className={cn("flex space-x-2", props.className)}>
            {[0, 1, 2].map((i) => (
                <div
                    key={i}
                    className="h-3 w-3 animate-bounce rounded-full bg-white"
                    style={{
                        animationDelay: `${i * 0.15}s`,
                    }}
                />
            ))}
        </div>
    );
};

export default SimpleLoading;
