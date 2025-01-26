import Image from 'next/image';
import { EventCardType } from '../_data/eventTypes';
import Link from 'next/link';

interface EventCardProps {
    event: EventCardType;
}

const categoryColors = {
    Workshop: "bg-blue-150",
    Competition: "bg-orange-150",
    Social: "bg-purple-150",
}

export default function EventCard({ event }: EventCardProps) {
    return (
        <Link href={`/events/${event.title}`} className="bg-gray-50 rounded-2xl flex-col justify-start items-end gap-9 inline-flex overflow-hidden
        transition will-change-auto duration-500 hover:duration-200 hover:-translate-x-1 hover:-translate-y-1 cursor-pointer hover:drop-shadow-cardLift
        ">
            <div className="">
                <Image src={event.image} alt={event.imageAlt} width={600} height={400} className="rounded-2xl" />
            </div>
            <div className="self-stretch px-8 pb-8 flex-col justify-start items-center gap-6 flex">
                <div className="justify-start items-start gap-2 inline-flex">
                    <div className={`px-[18px] py-1 ${categoryColors[event.category]} rounded-2xl justify-center items-center gap-2.5 overflow-hidden`}>
                        <p className="text-gray-800 text-sm font-bold">{event.category}</p>
                    </div>
                </div>
                <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                    <p className="self-stretch text-center text-black text-xl font-bold leading-[25.20px]">{event.title}</p>
                    <div className="self-stretch h-[38px] flex-col justify-start items-start flex">
                        <p className="self-stretch text-center text-[#1453b7] font-bold leading-tight" suppressHydrationWarning>{event.time.toLocaleString()}</p>
                        <p className="self-stretch text-center text-[#1453b7] font-medium italic leading-tight">{event.location}</p>
                    </div>
                    <p className="self-stretch text-center font-medium leading-tight">{event.description}</p>
                </div>
            </div>
        </Link >
    );
}
