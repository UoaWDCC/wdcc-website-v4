import React from "react";
import Link from "next/link";

import Arrow from "@/assets/svg/Arrow";
import { Button } from "@/components/primitives/Button";

interface SignupCardProps {
    SignUpCard: {
        title: string;
        descriptionLineOne: string;
        descriptionLineTwo: string;
    };
}
const SignupCard = ({ SignUpCard }: SignupCardProps) => {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-10 rounded-2xl bg-blue-brand px-12 py-10 md:px-16 md:py-12">
            <div className="flex w-full flex-col justify-between gap-8 md:flex-row">
                <h2 className="flex-1 text-2xl font-bold leading-[1.1] text-white md:text-3xl">{SignUpCard.title}</h2>
                <p className="flex-1 text-md leading-[1.3] text-white">
                    {SignUpCard.descriptionLineOne}
                    <br></br> {SignUpCard.descriptionLineTwo}
                    <Link href="/projects" className="underline transition hover:opacity-75">
                        WDCC Project
                    </Link>
                    !
                </p>
            </div>
            <div className="flex w-full flex-col items-center justify-items-start gap-2 md:flex-row md:gap-4">
                <Button variant={{ style: "secondary", color: "blue" }} className="px-16 py-3 text-md" href="https://docs.google.com/forms/d/e/1FAIpQLSf9p1n1GpuuFxXbhx_7iWDQkDqRpxVDAjUOeyyzYeavC6d48A/viewform?usp=sharing">
                    Join WDCC <Arrow />
                </Button>
                <Button
                    variant={{ style: "text", color: "light" }}
                    className="text-sm font-normal"
                    href="/pricing-xdx-real"
                >
                    or view pricing information
                </Button>
            </div>
        </div>
    );
};

export default SignupCard;
