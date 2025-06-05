type InfoPillProps = {
    text: string;
}

export default function InfoPill({ text }: InfoPillProps) {
    return (
        <div className="text-md flex w-fit items-center justify-center rounded-full border-2 border-gray-100 bg-white px-10 py-3 text-center">
            <p className="">{text}</p>
        </div>
    );
}
