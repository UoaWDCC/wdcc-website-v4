import Arrow from "@/assets/svg/Arrow";
import { Button } from "@/components/primitives/Button";
import Link from "next/link";

type SignupCardProps = {
    SignUpCard: {
        title: string;
        descriptionLineOne: string;
        descriptionLineTwo: string;
    };
};
const SignupCard = ({ SignUpCard }: SignupCardProps) => {
    return (
        <div className="bg-blue-brand flex w-full flex-col items-center justify-center gap-10 rounded-2xl px-12 py-10 md:px-16 md:py-12">
            <div className="flex w-full flex-col justify-between gap-8 md:flex-row">
                <h2 className="flex-1 text-2xl leading-[1.1] font-bold text-white md:text-3xl">{SignUpCard.title}</h2>
                <p className="text-md flex-1 leading-[1.3] text-white">
                    {SignUpCard.descriptionLineOne}
                    <br />
                    <br /> {SignUpCard.descriptionLineTwo}
                    <Link href="/projects" className="underline transition hover:opacity-75">
                        WDCC Project
                    </Link>
                    !
                </p>
            </div>
            <div className="flex w-full flex-col items-center justify-items-start gap-2 md:flex-row md:gap-4">
                <Button
                    variant={{ style: "secondary", color: "blue" }}
                    className="text-md px-16 py-3"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf9p1n1GpuuFxXbhx_7iWDQkDqRpxVDAjUOeyyzYeavC6d48A/viewform?usp=sharing"
                >
                    Join WDCC <Arrow />
                </Button>
            </div>
        </div>
    );
};

export default SignupCard;
