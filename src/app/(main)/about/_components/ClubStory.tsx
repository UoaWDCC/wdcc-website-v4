import { AboutPage } from "@/types/pages/AboutPage";
import Duo from "@/components/primitives/Duo";

type ClubStoryProps = {
    clubStory: AboutPage["clubStory"];
};

export default function ClubStory({ clubStory }: ClubStoryProps) {
    return (
        <Duo image={{ src: clubStory.image, alt: clubStory.imageAlt }} imgFirst>
            <h3 className="text-md font-bold">{clubStory.title}</h3>
            <p className="leading-[1.3] whitespace-pre-line">{clubStory.content}</p>
        </Duo>
    );
}
