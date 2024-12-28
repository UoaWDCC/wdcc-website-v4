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
            <div className="flex max-w-2xl flex-col gap-4">
                <h1 className="text-center text-4xl font-semibold text-white sm:text-left">{title}</h1>
                <p className="text-center text-white sm:text-left">{content}</p>
            </div>
            {children}
        </div>
    );
}
