import React from "react";
import * as motion from "motion/react-client";
import { animation } from "@/utils/animations";
import { CircleAnimation } from "./CircleAnimation";

export const HeroSubHeading = ({ blurb }: { blurb: string }) => {
    return (
        <motion.p {...animation.slideUp} className="text-md leading-tight text-blue-700 sm:text-lg">
            {blurb}{" "}
            <CircleAnimation className="italic underline">
                <span className="font-normal italic underline">help them shine</span>
            </CircleAnimation>
            .
        </motion.p>
    );
};
