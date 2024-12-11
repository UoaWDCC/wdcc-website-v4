type EventCardProps = {
    tempText: string;
};

export default function EventCard({ tempText }: EventCardProps) {
    return <div className="center-content h-96 w-full bg-slate-300">{tempText}</div>;
}
