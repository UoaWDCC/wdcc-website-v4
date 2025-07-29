import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/misc";

type CertificateBlockType = {
    children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

/**
 * content is justify between
 */
export const CertificateContentBlock = ({ children, ...props }: CertificateBlockType) => {
    return (
        <div
            {...props}
            className={cn("z-50 flex h-full w-full flex-col justify-between gap-6 text-base", props.className)}
        >
            {children}
        </div>
    );
};
