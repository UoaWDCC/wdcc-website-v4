import { ReactNode } from "react";

interface AboutPageBodyProps {
    children?: ReactNode;
    className?: string;
}

export default function AboutPageBody({ children, className }: AboutPageBodyProps) {
    return <div className={className}>{children}</div>;
}
