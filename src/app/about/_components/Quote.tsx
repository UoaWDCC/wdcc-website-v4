interface QuoteProps {
    quote: string;
    author: string;
    subscript?: string;
}

export default function Quote({ quote, author, subscript }: QuoteProps) {
    return (
        <>
            <blockquote className="relative whitespace-pre-line text-center text-lg font-semibold italic text-blue-brand">
                <span className="absolute -left-3 -top-5 text-2xl text-gray-200 sm:-left-6 sm:-top-10 sm:text-5xl">
                    “
                </span>
                {quote}
            </blockquote>
            <cite className="text-center text-md font-bold not-italic">
                <span className="uppercase">{author}</span>
                <span className="text-gray-250"> {subscript}</span>
            </cite>
        </>
    );
}
