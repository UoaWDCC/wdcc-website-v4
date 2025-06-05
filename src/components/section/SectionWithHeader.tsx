import { ReactNode } from "react";

type SectionWithHeaderProps = {
    children: ReactNode;
    headerText: string;
}

export default function SectionWithHeader({ children, headerText }: SectionWithHeaderProps) {
    return (
        <div className="px-36 py-20">
            <h2 className="mb-5">{headerText}</h2>
            {children}
        </div>
    );
}
