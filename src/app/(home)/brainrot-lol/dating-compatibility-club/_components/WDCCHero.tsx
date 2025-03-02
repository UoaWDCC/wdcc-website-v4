"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

import Arrow from "@/assets/svg/Arrow";
import { Button } from "@/components/primitives/Button";
import { useScroll } from "@/components/scroll/ScrollContext";

const transition = {
    duration: 2,
    ease: [0.13, 0.71, 0.35, 1],
};

// IMPORTANT This is for the DATING BRAINROT page - not the actual production landing!

const WDCCHero = () => {
    const [downTextVisible, setDownTextVisible] = useState(true);
    const { getScrollContainer, getScrollY } = useScroll();
    const scrollContainer = getScrollContainer();

    useEffect(() => {
        const handleScroll = () => {
            if (getScrollY() > 100) {
                setDownTextVisible(false);
            } else {
                setDownTextVisible(true);
            }
        };

        scrollContainer.addEventListener("scroll", handleScroll);

        return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }, []);

    function scrollDown() {
        getScrollContainer().scrollTo({ top: 800, behavior: "smooth" });
    }

    return (
        <div className="responsive-fullwidth relative flex h-screen w-full flex-col items-start justify-center">
            <div className="flex flex-col items-start gap-8 text-[#E70068]">
                <div className="flex flex-col gap-4">
                    <motion.h3
                        animate={{ y: [32, 0], transition: transition }}
                        className="text-sm leading-none font-normal tracking-[0.25em]"
                    >
                        WEB-BASED DATING AND COMPATIBILITY CLUB
                    </motion.h3>
                    <motion.h1
                        animate={{ y: [64, 0], transition: transition }}
                        className="text-[60px] leading-[0.95] font-bold tracking-[-2px]"
                    >
                        From
                        <em className="text-[#8F0070]"> campus crushes</em>
                        <br />
                        to those <em className="text-[#8F0070]">midnight coding rushes</em>.
                    </motion.h1>
                </div>
                <motion.p
                    animate={{ y: [48, 0], transition: transition }}
                    className="text-md max-w-[80%] leading-tight sm:text-lg"
                >
                    We help connect UoA’s coolest Computer Science, Software Engineering, and other degrees’ students
                    with the partners that <em>help them shine</em> in life, love, and LeetCode.
                </motion.p>
                <motion.div animate={{ y: [32, 0], transition: transition }} className="">
                    <Button
                        className="border-2 border-[#8F0070] bg-transparent text-[#8F0070] hover:bg-pink-200"
                        href="http://tinder.com/"
                    >
                        Become a member for 2025
                    </Button>
                </motion.div>

                <div className="pt-12">
                    <div
                        className={`font-semibold opacity-50 transition duration-200 hover:cursor-pointer hover:opacity-75 ${!downTextVisible && "opacity-0 transition duration-300"}`}
                        onClick={scrollDown}
                    >
                        <span className="text-red">Explore WDCC</span>
                        <Arrow className="ml-2 rotate-90"></Arrow>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WDCCHero;