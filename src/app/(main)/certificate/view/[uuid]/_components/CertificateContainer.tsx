import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/misc";

type CertificateContainerType = {
    children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const CertificateContainer = ({ children, ...props }: CertificateContainerType) => {
    return <div className={cn("grid size-full grid-cols-3 gap-12 text-white", props.className)}>{children}</div>;
};
