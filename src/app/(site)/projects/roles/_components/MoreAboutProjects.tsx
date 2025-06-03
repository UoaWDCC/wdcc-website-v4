// import { ReactNode } from "react";
import { ReactNode } from "react";
import Link from "next/link";

import Arrow from "@/assets/svg/Arrow";

interface props {
    children: ReactNode;
}

export default function MoreAboutProjects({ children, }: props) {
    return (
        <div className="w-full rounded-2xl flex flex-col gap-8 py-22 px-12 text-white text-center border-[3px] border-gray-800/30">
            <div className="flex flex-col gap-4">
                <h3 className="font-bold text-4xl leading-none">learn more about projects.</h3>
                {children}
            </div>


            <div className="flex gap-4 flex-col w-full md:flex-row md:w-[75%] mx-auto text-gray-800 font-semibold">
                <Link href="/projects" className="w-full h-[100px] bg-pink-300 rounded-xl relative  transition duration-200 hover:opacity-80">
                    <div className="absolute right-6 bottom-4 text-md">
                        <span>projects overview</span> <Arrow className="-rotate-45"/>
                    </div>
                </Link>
                <Link href="/about/faq" className="w-full h-[100px] bg-orange-200 rounded-xl relative  transition duration-200 hover:opacity-80">
                    <div className="absolute right-6 bottom-4 text-md">
                        <span>projects faq</span> <Arrow className="-rotate-45"/>
                    </div>
                </Link>
            </div>
        </div>
    )

}
