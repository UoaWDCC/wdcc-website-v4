"use client";

import { useRouter } from "next/navigation";
import { motion } from "motion/react";

import StandardPageLayout from "@/components/layout/StandardPageLayout";
import { Button } from "@/components/primitives/Button";





export default function NotFound() {
    const router = useRouter();

    const transition = {
        duration: 2,
        ease: [0.1, 0.7, 0.3, 1],
    };

    return (
        <StandardPageLayout navColor={"dark"}>
            <div className="responsive-fullwidth relative grid min-h-screen place-items-center bg-blue-400">
                <div className="flex h-min w-[80%] flex-col items-center gap-8 text-center text-white sm:w-full">
                    <motion.p
                        animate={{ y: [16, 0], opacity: [0, 1], transition }}
                        className="leading-none text-white/50 italic"
                    >
                        * what a disaster *
                    </motion.p>

                    <div className="flex flex-col items-center justify-center gap-2">
                        <motion.div
                            animate={{ y: [32, 0], opacity: [0, 1], transition }}
                            className="flex items-end gap-2"
                        >
                            <h1 className="text-[128px] leading-none font-bold">404</h1>
                        </motion.div>
                        <motion.div
                            animate={{ y: [16, 0], opacity: [0, 1], transition }}
                            className="flex flex-col gap-2 sm:gap-0"
                        >
                            <p className="text-md leading-none font-semibold">This page could not be found.</p>
                            <p className="text-md leading-tight opacity-70">
                                Rest assured that we&apos;re working on it, though.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div animate={{ y: [8, 0], opacity: [0, 1], transition }}>
                        <Button onClick={() => router.back()} variant={{ style: "secondary", color: "purple" }}>
                            Go back
                        </Button>
                    </motion.div>
                </div>
                <motion.p
                    animate={{ y: [-16, 0], opacity: [0, 1], transition }}
                    className="absolute bottom-4 max-w-[80%] text-center text-sm leading-tight text-white/50"
                >
                    Think you found this through an error? Help keep our tech team working overtime by{" "}
                    <a href="mailto:tech@wdcc.co.nz" className="underline transition duration-200 hover:text-white">
                        contacting us
                    </a>.
                </motion.p>
            </div>

            <div className="responsive-fullwidth flex flex-col place-items-center bg-blue-600 py-32 text-center sm:py-64">
                <div className="flex max-w-[80%] flex-col gap-8">
                    <div className="flex flex-col">
                        <p className="text-md font-semibold text-white">Still stuck here?</p>
                        <p className="text-md leading-tight text-white">
                            {" "}
                            While you&apos;re hanging about, why not check out the official WDCC Tech Miku Playlist?
                        </p>
                    </div>

                    <iframe
                        className="border-2xl mx-auto h-[500px] w-full max-w-[800px]"
                        src="https://open.spotify.com/embed/playlist/5J9qhF47clpGAak7zAD9IC?utm_source=generator"
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    />
                </div>
            </div>
        </StandardPageLayout>
    );
}