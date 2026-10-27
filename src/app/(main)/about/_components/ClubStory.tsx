import { AboutPage } from "@/types/pages/AboutPage";
import Duo from "@/components/primitives/Duo";

type ClubStoryProps = {
    clubStory: AboutPage["clubStory"];
};

export default function ClubStory({ clubStory }: ClubStoryProps) {
    return (
        <Duo image={{ src: clubStory.image, alt: clubStory.imageAlt }} imgFirst>
            <h3 className="text-4xl tracking-tight leading-none font-extrabold text-blue-500">{clubStory.title}</h3>
            <p className="leading-[1.35] whitespace-pre-line text-md">{clubStory.content}</p>
        </Duo>
    );
}
