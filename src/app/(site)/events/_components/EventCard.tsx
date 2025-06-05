import Link from "next/link";

import { Event } from "@/types/models";

import ImageCover from "@/components/ImageCover";

type EventCardProps = {
    event: Event;
};

const categoryColors = {
    Workshop: "bg-blue-150",
    Projects: "bg-blue-300",
    Competition: "bg-orange-150",
    Social: "bg-purple-150",
    Other: "bg-gray-200",
};

export default function EventCard({ event }: EventCardProps) {
    const slug = event.slug ?? "not-found";

    return (
        <Link
            href={`/events/${slug}`}
            className="hover:drop-shadow-cardLift inline-flex cursor-pointer flex-col items-end justify-start gap-9 overflow-hidden rounded-2xl bg-gray-50 transition duration-500 will-change-auto hover:-translate-x-1 hover:-translate-y-1 hover:duration-200"
        >
            <ImageCover
                src={event.thumbnail.src}
                height="240px"
                alt={event.thumbnail.alt}
                className="w-full rounded-2xl"
            />

            <div className="flex flex-col items-center justify-start gap-6 self-stretch px-8 pb-8">
                <div className="inline-flex items-start justify-start gap-2">
                    <div
                        className={`px-[18px] py-1 ${categoryColors[event.category]} items-center justify-center gap-2.5 overflow-hidden rounded-2xl`}
                    >
                        <p className="text-sm font-bold text-gray-800">{event.category}</p>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-3 self-stretch">
                    <p className="self-stretch text-center text-xl leading-[25.20px] font-bold text-black">
                        {event.title}
                    </p>
                    <div className="flex h-[38px] flex-col items-start justify-start self-stretch">
                        <p
                            className="self-stretch text-center leading-tight font-bold text-[#1453b7]"
                            suppressHydrationWarning
                        >
                            {event.time.toLocaleString()}
                        </p>
                        <p className="self-stretch text-center leading-tight font-medium text-[#1453b7] italic">
                            {event.location}
                        </p>
                    </div>
                    <p className="line-clamp-4 self-stretch text-center leading-tight font-medium">
                        {event.description}
                    </p>
                </div>
            </div>
        </Link>
    );
}
