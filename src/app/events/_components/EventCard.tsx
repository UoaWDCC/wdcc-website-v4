import Image from 'next/image';
import placeholder from '@public/600x400.png';
import { EventCardType } from '@/types/models';

interface EventCardProps {
    event: EventCardType;
}

export default function EventCard({ event }: EventCardProps) {
    let categoryColor: string;
    switch (event.category) {
        case "Workshop":
            categoryColor = "bg-blue-200";
            break;
        case "Competition":
            categoryColor = "bg-yellow-200";
            break;
        case "Social":
            categoryColor = "bg-purple-200";
            break;
        default:
            categoryColor = "bg-blue-200";
    }

    return (
        <div className="h-[520px] bg-slate-200 rounded-2xl flex-col justify-between items-end gap-9 inline-flex overflow-hidden">
            <div className="">
                <Image src={placeholder} alt={event.imageAlt} width={600} height={400} className="rounded-2xl" />
            </div>
            <div className="self-stretch px-8 pb-8 flex-col justify-start items-center gap-6 flex">
                <div className="justify-start items-start gap-2 inline-flex">
                    <div className={`px-[18px] py-1 ${categoryColor} rounded-2xl justify-center items-center gap-2.5 overflow-hidden`}>
                        <p className="text-black text-sm font-bold">{event.category}</p>
                    </div>
                </div>
                <div className="self-stretch h-[163px] flex-col justify-start items-start gap-3 flex">
                    <p className="self-stretch text-center text-black text-xl font-bold leading-[25.20px]">{event.title}</p>
                    <div className="self-stretch h-[38px] flex-col justify-start items-start flex">
                        <p className="self-stretch text-center text-[#1453b7] font-bold leading-tight">{event.time}</p>
                        <p className="self-stretch text-center text-[#1453b7] font-medium italic leading-tight">{event.location}</p>
                    </div>
                    <p className="self-stretch text-center font-medium leading-tight">{event.description}</p>
                </div>
            </div>
        </div >
    );
}
