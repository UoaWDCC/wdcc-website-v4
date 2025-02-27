import Image, { StaticImageData } from "next/image";

interface EventsRoadmapProps {
    title: string;
    image: {
        src: StaticImageData;
        alt: string;
    };
}

export default function EventsRoadmap({ title, image }: EventsRoadmapProps) {
    return (
        <div className="py-20">
            {/* id for navbar link */}
            <h2 id="roadmap" className="py-10 text-3xl font-bold">{title}</h2>
            <Image className="w-full rounded-2xl" src={image.src} alt={image.alt} />
        </div>
    );
}
