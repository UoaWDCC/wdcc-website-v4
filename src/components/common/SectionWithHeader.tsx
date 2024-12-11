import { ReactNode } from "react";

import Header from "../primitives/Header";
interface SectionWithHeaderProps {
    children: ReactNode;
    headerText: string;
}

export default function SectionWithHeader({ children, headerText }: SectionWithHeaderProps) {
    return (
        <div className="px-36 py-20">
            <Header className="mb-5">{headerText}</Header>
            {children}
        </div>
    );
}