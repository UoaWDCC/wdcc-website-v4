import { ReactNode } from "react";

interface AboutPageBodyProps {
    children?: ReactNode;
    outer?: string;
    inner?: string;
}

export default function AboutPageBody({ children, outer, inner }: AboutPageBodyProps) {
    return (
        <div className={outer}>
            <div className={inner}>{children}</div>;
        </div>
    );
}
