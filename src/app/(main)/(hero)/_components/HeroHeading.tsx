import React from "react";
import * as motion from "motion/react-client";
import { animation } from "@/utils/animations";

export const HeroHeading = ({ title }: { title: string }) => {
    return (
        <div className="flex flex-col gap-6 text-left">
            <motion.h3
                {...animation.slideUp}
                className="text-sm leading-none font-normal tracking-[0.25em] text-blue-600 sm:text-base"
            >
                {title}
            </motion.h3>
            <motion.h1
                {...animation.slideUp_xl}
                className="text-4xl leading-[0.95] font-bold tracking-[-2px] text-blue-600 sm:text-5xl"
            >
                Aotearoa’s
                <em> largest </em>
                <span className="bg-linear-to-br/oklch from-orange-500 to-purple-600 bg-clip-text text-transparent">
                    technology and design </span>
                student society.
            </motion.h1>
        </div>
    );
};
