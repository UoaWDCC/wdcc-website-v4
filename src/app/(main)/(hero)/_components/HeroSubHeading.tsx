import React from "react";
import * as motion from "motion/react-client";
import { Draw } from "@/components/old/Draw";
import { animation } from "@/utils/animations";

export const HeroSubHeading = ({ blurb }: { blurb: string }) => {
    return (
        <motion.p {...animation.slideUp} className="text-md leading-tight text-blue-700 sm:text-lg">
            {blurb}{" "}
            <Draw className="italic underline">
                <span className="font-normal italic underline">help them shine</span>
            </Draw>
            .
        </motion.p>
    );
};
