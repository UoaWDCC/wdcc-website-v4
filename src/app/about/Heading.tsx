interface HeadingProps {
    title: string;
}

export default function Heading({ title }: HeadingProps) {
    return <h1 className="pt-10 text-center text-3xl font-semibold sm:text-left dark:text-white">{title}</h1>;
}
