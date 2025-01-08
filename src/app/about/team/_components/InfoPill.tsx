interface InfoPillProps {
    text: string;
}

export default function InfoPill({ text }: InfoPillProps) {
    return (
        <div className="flex items-center justify-center rounded-full border border-gray-100 bg-white px-10 py-4 text-center">
            <p className="">{text}</p>
        </div>
    );
}
