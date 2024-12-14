import { cn } from "@/libs/utils";

interface HeadingProps {
    title: string;
    className?: string;
}

export default function PageHeading({ title, className }: HeadingProps) {
    return <h1 className={cn("text-center text-3xl font-semibold sm:text-left", className)}>{title}</h1>;
}
