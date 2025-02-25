import Link from "next/link";

import { Event } from "@/types/models";

import ImageCover from "@/components/ImageCover";

interface EventCardProps {
    event: Event;
}

const categoryColors = {
    Workshop: "bg-blue-150",
    Competition: "bg-orange-150",
    Social: "bg-purple-150",
};

export default function EventCard({ event }: EventCardProps) {
    const slug = event.slug || "not-found";

    return (
        <Link
            href={`/events/${slug}`}
            className="inline-flex cursor-pointer flex-col items-end justify-start gap-9 overflow-hidden rounded-2xl bg-gray-50 transition duration-500 will-change-auto hover:-translate-x-1 hover:-translate-y-1 hover:drop-shadow-cardLift hover:duration-200"
        >
            <ImageCover
                src={event.thumbnail.src}
                width="600px"
                height="400px"
                alt={event.thumbnail.alt}
                className="rounded-2xl"
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
                    <p className="self-stretch text-center text-xl font-bold leading-[25.20px] text-black">
                        {event.title}
                    </p>
                    <div className="flex h-[38px] flex-col items-start justify-start self-stretch">
                        <p
                            className="self-stretch text-center font-bold leading-tight text-[#1453b7]"
                            suppressHydrationWarning
                        >
                            {event.time.toLocaleString()}
                        </p>
                        <p className="font-medium self-stretch text-center italic leading-tight text-[#1453b7]">
                            {event.location}
                        </p>
                    </div>
                    <p className="font-medium self-stretch text-center leading-tight">{event.description}</p>
                </div>
            </div>
        </Link>
    );
}
