import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/misc";

type CertificateBorderType = {
    children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const CertificatePadding = ({ children, ...props }: CertificateBorderType) => {
    return (
        <div {...props} className={cn("text-md size-full p-16", props.className)}>
            {children}
        </div>
    );
};
