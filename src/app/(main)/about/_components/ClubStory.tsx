import { AboutPage } from "@/types/pages/AboutPage";
import Duo from "@/components/primitives/Duo";

type ClubStoryProps = {
    clubStory: AboutPage["clubStory"];
};

export default function ClubStory({ clubStory }: ClubStoryProps) {
    return (
        <Duo image={{ src: clubStory.image, alt: clubStory.imageAlt }} imgFirst>
            <h3 className="text-4xl leading-none font-extrabold tracking-tight text-blue-500">{clubStory.title}</h3>
            <p className="text-md leading-[1.35] whitespace-pre-line">{clubStory.content}</p>
        </Duo>
    );
}
