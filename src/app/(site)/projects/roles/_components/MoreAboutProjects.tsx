// import { ReactNode } from "react";
import { ReactNode } from "react";

import Link from "next/link";

import Arrow from "@/assets/svg/Arrow";

type props = {
    children: ReactNode;
};

export default function MoreAboutProjects({ children }: props) {
    return (
        <div className="flex w-full flex-col gap-8 rounded-2xl border-[3px] border-gray-800/30 px-12 py-22 text-center text-white">
            <div className="flex flex-col gap-4">
                <h3 className="text-4xl leading-none font-bold">learn more about projects.</h3>
                {children}
            </div>

            <div className="mx-auto flex w-full flex-col gap-4 font-semibold text-gray-800 md:w-[75%] md:flex-row">
                <Link
                    href="/projects"
                    className="relative h-[100px] w-full rounded-xl bg-pink-300 transition duration-200 hover:opacity-80"
                >
                    <div className="text-md absolute right-6 bottom-4">
                        <span>projects overview</span> <Arrow className="-rotate-45" />
                    </div>
                </Link>
                <Link
                    href="/about/faq"
                    className="relative h-[100px] w-full rounded-xl bg-orange-200 transition duration-200 hover:opacity-80"
                >
                    <div className="text-md absolute right-6 bottom-4">
                        <span>projects faq</span> <Arrow className="-rotate-45" />
                    </div>
                </Link>
            </div>
        </div>
    );
}
