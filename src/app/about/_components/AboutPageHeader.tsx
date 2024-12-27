import { ReactNode } from "react";

interface AboutPageHeaderProps {
    title: string;
    content: string;
    children?: ReactNode;
    className?: string;
}

export default function AboutPageHeader({ title, content, children, className }: AboutPageHeaderProps) {
    return (
        <div className={className}>
            <div>
                <h1 className="text-center text-3xl font-semibold text-white sm:text-left">{title}</h1>
                <p className="text-center text-sm text-white sm:text-left">{content}</p>
            </div>
            {children}
        </div>
    );
}
