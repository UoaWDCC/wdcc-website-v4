"use client";

import { useRouter } from "next/navigation";

import StandardPageLayout from "@/components/layout/StandardPageLayout";
import { motion } from "motion/react";
import { Button } from "@/components/primitives/Button";

export default function NotFound() {
    const router = useRouter();

    const transition = {
        duration: 2,
        ease: [0.1, 0.7, 0.3, 1],
    };

    return (
        <StandardPageLayout navColor={"dark"}>
            <div className="min-h-screen grid place-items-center relative bg-blue-400 responsive-fullwidth">
                <div
                    className="flex h-min w-[80%] sm:w-full flex-col items-center gap-8 text-center text-white">

                    <motion.p animate={{ y: [16, 0], opacity: [0, 1], transition: transition }} className="text-white/50 italic leading-none">* what a disaster *</motion.p>

                    <div className="flex flex-col gap-2 justify-center items-center">
                        <motion.div
                            animate={{ y: [32, 0], opacity: [0, 1], transition: transition }}
                            className="flex gap-2 items-end">
                            <h1 className="text-[128px] font-bold leading-none">404</h1>
                        </motion.div>
                        <motion.div animate={{ y: [16, 0], opacity: [0, 1], transition: transition }} className="flex flex-col gap-2 sm:gap-0">
                            <p className="font-semibold text-md leading-none">This page could not be found.</p>
                            <p className="text-md opacity-70 leading-tight">Rest assured that we&apos;re working on it, though.</p>
                        </motion.div>
                    </div>

                    <motion.div animate={{ y: [8, 0], opacity: [0, 1], transition: transition }}>
                        <Button onClick={() => router.back()} variant={{ style: "secondary", color: "purple" }}>
                            Go back
                        </Button>
                    </motion.div>

                </div>
                <motion.p animate={{ y: [-16, 0], opacity: [0, 1], transition: transition }} className="max-w-[80%] text-center leading-tight absolute bottom-4 text-sm text-white/50">Think you found this through an error? Help keep
                    our tech team working overtime by <a href="mailto:tech@wdcc.co.nz"
                                                         className="underline hover:text-white transition duration-200">contacting us.</a>
                </motion.p>
            </div>

            <div className="flex flex-col py-32 sm:py-64 text-center bg-blue-600 responsive-fullwidth grid place-items-center">
                <div className="flex flex-col gap-8 max-w-[80%]">
                    <div className="flex flex-col">
                        <p className="text-md font-semibold text-white ">Still stuck here?</p>
                        <p className="text-md text-white leading-tight"> While you&apos;re hanging about,
                            why not check out the official WDCC Tech Miku Playlist?</p>
                    </div>

                    <iframe className="border-2xl w-full max-w-[800px] mx-auto h-[500px]"
                            src="https://open.spotify.com/embed/playlist/5J9qhF47clpGAak7zAD9IC?utm_source=generator"
                            width="100%" height="352" frameBorder="0" allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"></iframe>
                </div>
            </div>

        </StandardPageLayout>
    );
}
