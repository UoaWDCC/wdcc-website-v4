interface QuoteProps {
    quote: string;
    author: string;
    subscript?: string;
}

export default function Quote({ quote, author, subscript }: QuoteProps) {
    return (
        <div className="flex w-full items-center justify-center py-20">
            <div className="flex w-[80%] max-w-[1100px] flex-col gap-4">
                <blockquote className="font-medium relative whitespace-pre-line text-center text-xl italic">
                    <span className="absolute -left-2 -top-10 text-5xl text-gray-200">“</span>
                    {quote}
                </blockquote>
                <cite className="text-center text-lg font-semibold">
                    {author} <strong>{subscript}</strong>
                </cite>
            </div>
        </div>
    );
}
