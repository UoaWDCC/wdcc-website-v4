import { cn } from "@/libs/utils";

interface AboutPageHeadingProps {
    title: string;
    className?: string;
}

export default function AboutPageHeading({ title, className }: AboutPageHeadingProps) {
    return <h1 className={cn("text-center text-3xl font-semibold sm:text-left", className)}>{title}</h1>;
}
