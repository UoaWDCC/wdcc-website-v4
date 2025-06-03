interface QuoteProps {
    quote: string;
    author: string;
    subscript?: string;
}

export default function Quote({ quote, author, subscript }: QuoteProps) {
    return (
        <>
            <blockquote className="text-blue-brand relative text-center text-lg font-semibold whitespace-pre-line italic">
                <span className="absolute -top-5 -left-3 text-2xl text-gray-200 sm:-top-10 sm:-left-6 sm:text-5xl">
                    “
                </span>
                {quote}
            </blockquote>
            <cite className="text-md text-center font-bold not-italic">
                <span className="uppercase">{author}</span>
                <span className="text-gray-250"> {subscript}</span>
            </cite>
        </>
    );
}
