// import { ReactNode } from "react";
import { ReactNode } from "react";
import Link from "next/link";

import Arrow from "@/assets/svg/Arrow";

interface props {
    children: ReactNode;
}

export default function MoreAboutProjects({ children, }: props) {
    return (
        <div className="w-full rounded-2xl flex flex-col gap-8 py-12 px-12 text-white text-center border-[3px] border-purple-300">
            <div>
                <h3 className="font-bold text-2xl">learn more about WDCC Projects</h3>
                {children}
            </div>


            <div className="flex gap-4 md:w-[75%] mx-auto">
                <Link href="/projects" className="w-full h-[100px] bg-purple-700 rounded-xl relative  transition duration-200 hover:opacity-80">
                    <div className="absolute right-6 bottom-4 text-md">
                        <span>projects overview</span> <Arrow className="-rotate-45"/>
                    </div>
                </Link>
                <Link href="/about/faq" className="w-full h-[100px] bg-purple-700 rounded-xl relative  transition duration-200 hover:opacity-80">
                    <div className="absolute right-6 bottom-4 text-md">
                        <span>projects faq</span> <Arrow className="-rotate-45"/>
                    </div>
                </Link>
            </div>
        </div>
    )

}
