import { AboutPage } from "@/types/pages/AboutPage";
import Arrow from "@/assets/svg/Arrow";
import { Button } from "@/components/primitives";
import Duo from "@/components/primitives/Duo";

type OurPeopleProps = {
    ourPeople: AboutPage["ourPeople"];
};

export default function OurPeople({ ourPeople }: OurPeopleProps) {
    return (
        <Duo image={{ src: ourPeople.image, alt: ourPeople.imageAlt }}>
            <h3 className="text-4xl leading-none font-extrabold tracking-tight text-blue-500">{ourPeople.title}</h3>
            <p className="text-md leading-[1.35] whitespace-pre-line">{ourPeople.content}</p>
            <div className="w-auto">
                <Button variant={{ style: "secondary", color: "yellow" }} href="/about/team">
                    Meet the team <Arrow />
                </Button>
            </div>
        </Duo>
    );
}
