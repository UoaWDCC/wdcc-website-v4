import { ReactNode } from "react";

interface PageBodyProps {
    children?: ReactNode;
    outer?: string;
    inner?: string;
}

export default function PageBody({ children, outer, inner }: PageBodyProps) {
    return (
        <div className={outer}>
            <div className={inner}>{children}</div>;
        </div>
    );
}
