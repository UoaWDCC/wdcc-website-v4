import React from "react";

import Link from "next/link";
import { Button } from "@/components/primitives/Button";

const SignupCard = () => {
    return (
        <div className="flex flex-col gap-10 items-center justify-center bg-blue-brand w-full rounded-2xl py-12 px-16">
            <div className="w-full flex gap-8 justify-between">
                <h2 className="text-white text-3xl font-bold flex-1 leading-[1.1]">Your university tech club dreams start here.</h2>
                <p className="flex-1 text-white text-md leading-[1.3]">WDCC membership is totally free, and lets you access all kinds of member-exclusive messages, events, workshops, and more.
                    <br></br>Plus, at the start of the year, you can apply to join a <Link href="/projects" className="underline transition hover:opacity-75">WDCC Project</Link>!</p>
            </div>
            <div className="flex gap-4 items-center w-full justify-items-start">
                <Button variant={{style: "secondary", color: "blue"}} className="text-md px-16 py-3">Join WDCC →</Button>
                <Button variant={{style: "text", color: "light"}} className="text-sm font-normal" href="/pricing-xdx-real">or view pricing information</Button>
            </div>
        </div>
    );
};

export default SignupCard;
