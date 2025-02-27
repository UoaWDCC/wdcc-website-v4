"use client";

import React, { useRef } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/primitives/Button";

import Arrow from "@/assets/svg/Arrow";

const transition = {
    duration: 2,
    ease: [.13,.71,.35,1],
};


// IMPORTANT This is for the DATING BRAINROT page - not the actual production landing!


const WDCCHero = () => {
    const ref = useRef<HTMLDivElement>(null);

    const [downTextVisible, setDownTextVisible] = React.useState(true);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setDownTextVisible(false);
            }
            else {
                setDownTextVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll',
            handleScroll);
    }, []);

    function scrollDown() {
        window.scrollTo({ top: 800, behavior: 'smooth' });
    }



    return (
        <div ref={ref} className="relative h-screen flex w-full flex-col items-start justify-center responsive-fullwidth">
            <div className="flex flex-col gap-8 items-start text-[#E70068]">
                <div className="flex flex-col gap-4">
                    <motion.h3 animate={{ y: [32, 0], transition: transition }}
                               className="text-sm font-normal tracking-[0.25em] leading-none">WEB-BASED DATING AND
                        COMPATIBILITY CLUB
                    </motion.h3>
                    <motion.h1 animate={{ y: [64, 0], transition: transition }}
                               className="text-[60px] font-bold tracking-[-2px] leading-[0.95]">
                        From
                        <em className="text-[#8F0070]"> campus crushes</em><br />
                        to those <em className="text-[#8F0070]">midnight coding rushes</em>.
                    </motion.h1>
                </div>
                <motion.p animate={{ y: [48, 0], transition: transition }}
                          className="text-md sm:text-lg max-w-[80%] leading-tight">
                    We help connect UoA’s coolest Computer Science, Software Engineering, and other degrees’
                    students with the partners that <em>help them shine</em> in life, love, and LeetCode.
                </motion.p>
                <motion.div animate={{ y: [32, 0], transition: transition }}
                            className="">
                    <Button className="bg-transparent border-2 border-[#8F0070] text-[#8F0070] hover:bg-pink-200" href="http://tinder.com/">Become a member for 2025</Button>
                </motion.div>

                <div className="pt-12">
                    <div className={`font-semibold opacity-50 hover:opacity-75 hover:cursor-pointer transition duration-200 ${!downTextVisible && 'opacity-0 transition duration-300'}`}
                         onClick={scrollDown}>
                        <span className='text-red'>
                            Explore WDCC
                        </span>
                        <Arrow className="rotate-90 ml-2"></Arrow>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WDCCHero;
