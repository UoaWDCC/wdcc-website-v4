interface QuoteProps {
    quote: string;
    author: string;
    subscript?: string;
}

export default function Quote({ quote, author, subscript }: QuoteProps) {
    return (
        <>
            <blockquote className="relative whitespace-pre-line text-center text-xl font-semibold italic text-blue-brand">
                <span className="absolute -left-0 -top-10 text-5xl text-gray-200">“</span>
                {quote}
            </blockquote>
            <cite className="text-center text-lg font-bold not-italic">
                <span className="uppercase">{author}</span>
                <span className="text-gray-250"> {subscript}</span>
            </cite>
        </>
    );
}
