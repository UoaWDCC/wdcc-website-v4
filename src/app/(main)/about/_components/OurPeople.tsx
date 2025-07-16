import { AboutPage } from "@/types/pages/AboutPage";
import Arrow from "@/assets/svg/Arrow";
import { Button } from "@/components/primitives";
import Duo from "@/components/primitives/Duo";

type OurPeopleProps = {
    ourPeople: AboutPage["ourPeople"];
};

export default function OurPeople({ ourPeople }: OurPeopleProps) {
    return (
        <Duo image={{ src: ourPeople.image, alt: ourPeople.imageAlt }} imgFirst>
            <h3 className="text-md font-bold">{ourPeople.title}</h3>
            <p className="leading-[1.3] whitespace-pre-line">{ourPeople.content}</p>
            <div className="w-auto">
                <Button variant={{ style: "secondary", color: "yellow" }} href="/about/team">
                    Meet the team <Arrow />
                </Button>
            </div>
        </Duo>
    );
}
