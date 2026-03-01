import Image from "next/image";
import { EmptyListPlaceholder } from "@/components/misc/EmptyListPlaceholder";

type EventsRoadmapProps = {
    title: string;
    image?: {
        src: string;
        alt: string;
    };
};

export default function EventsRoadmap({ title, image }: EventsRoadmapProps) {
    return (
        <div className="py-20" id="roadmap">
            <h2 className="py-10 text-3xl font-bold">{title}</h2>
            {image ? (
                <Image className="w-full rounded-2xl" src={image.src} alt={image.alt} width="4000" height="3000" />
            ) : (
                <EmptyListPlaceholder>Roadmap coming soon for 2026</EmptyListPlaceholder>
            )}
        </div>
    );
}
