"use client";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

import FeatureCard from "./_components/FeatureCard";

{/* Font and other import logic held locally so the troll pages don't have external impact. */ }
import { Cardo } from "next/font/google";
const cardo = Cardo({ weight: ['400', '700'], style: ["italic", "normal"], subsets: ["latin"] });


import React from "react";
import Image from "next/image";

export default function PricingPage() {
    return (
        <StandardPageLayout navColor={"dark"} className={`${cardo.className}`}>
            <div className="min-h-screen responsive-fullwidth bg-[#111121]">
                <div className="h-screen w-full flex flex-col justify-end">
                    <Image className="h-screen w-full object-cover saturate-[.2] brightness-[0.4] absolute"
                         src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Tuscany_landscape_view_skyline.jpg/4096px-Tuscany_landscape_view_skyline.jpg?20180626112559"}
                         alt={""} />
                    <div
                        className="z-10 relative text-white flex flex-col gap-4 w-[clamp(300px,75%,1800px)] mx-auto my-32">
                        <h1 className="text-[#FFE2B7] text-lg tracking-[2.2px]">
                            <em>the</em> WINE DRINKING & CHAMPAGNE CLUB
                        </h1>
                        <div className="text-[74px] tracking-[-1.28px]  leading-none">
                            <p>
                                Unparalled refinement.
                            </p>
                            <p>
                                Discerning <span className="italic">excellence</span>.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-y-[1px] border-white py-6">
                    <div
                        className="w-[clamp(300px,75%,1800px)] mx-auto grid grid-cols-[3fr_2fr] gap-12 divide-x-[1px] divide-white">
                        <div className="py-32 flex flex-col gap-4 max-w-[800px]">
                            <p className="text-md text-white opacity-75 mb-4">[I]</p>
                            <p className="text-white text-lg leading-tight">
                                “I once dreamed of a crystal flute. A hundred thousand bubbles burst forth in its amber
                                stream - they swirled in the dawning sun and <em>whispered to me</em>. Like the finest
                                aromas to the newest connoisseur, like the healthiest cows to the most expansive
                                paddocks, it is only quality that begets devotion.”
                            </p>
                            <div className="flex gap-2 text-white italic opacity-75">
                                <span className="italic">Cofounder</span>
                                <span className="tracking-[2.88px]">HATSUNE MIKU</span>
                            </div>
                        </div>

                        <div className="h-full flex pl-12 justify-center items-center">
                            <Image className="h-[60%] object-cover object-left brightness-[0.4]"
                                 src={"/brainrot/w3.jpg"}
                                 alt={"miku wine"} />
                        </div>
                    </div>
                </div>

                <div className="border-b-[1px] border-white py-32">
                    <div
                        className="w-[clamp(300px,75%,1800px)] mx-auto flex flex-col items-center justify-center gap-12 text-lg leading-tight">
                        <p className="text-md text-white opacity-75 mb-4">[II]</p>
                        <div className="text-[#FFE2B7] flex flex-col gap-1 items-center justify-center">
                            <p className="text-white">
                                Beneath the canopy of stars, we grant CS/SE students a privilege few will ever see:
                            </p>
                            <p className="text-white">
                                The ability to savour the finest wines on campus.
                            </p>
                        </div>

                        <p className="text-white italic">
                            This is no ordinary student organisation.
                        </p>

                        <div className="text-[#FFE2B7] flex flex-col gap-1 items-center justify-center">
                            <p>
                                This is the Wine Drinking and Champagne Club.
                            </p>
                            <p>
                                A premier beacon of elegance, taste, and elevation.
                            </p>
                        </div>

                        <button
                            className="mx-auto w-fit border-[1px] border-white px-5 pb-[10px] pt-[12px] text-white text-sm bg-none fill-none hover:opacity-75 transition duration-300">
                            LEARN MORE
                        </button>
                    </div>
                </div>

                <div className="h-[80vh] w-full flex flex-col">

                    <Image className="h-[80vh] w-full object-cover brightness-[0.4] absolute"
                         src={"/brainrot/w1.jpg"}
                         alt={"waiheke island"} />

                    <div className="py-6 h-full">
                        <div
                            className="h-full z-10 relative w-[clamp(300px,75%,1800px)] mx-auto grid grid-cols-[1fr_3fr] divide-x-[1px] divide-white">

                            <div>
                            </div>

                            <div className="h-full py-16 pl-24 flex flex-col justify-between">
                                <p className="text-[74px] tracking-[-1.28px]  leading-none text-white">
                                    What a <em>delightful</em> scenery.
                                </p>
                                <div className="">
                                    <p className="text-md text-white opacity-75 mb-4">[III]</p>
                                    <p className="text-white text-md leading-tight max-w-[550px]">
                                        WDCC wines are exclusively sourced from independent agreements with some of the
                                        world’s premier single-origin vineyards, under centuries of history and a
                                        perfect environment.
                                    </p>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>

                <div className="border-y-[1px] border-white py-6 flex flex-col items-center justify-center gap-4">
                    <div
                        className="w-[clamp(300px,75%,1400px)] mx-auto grid grid-cols-[1fr_1fr_1fr] divide-x-[1px] divide-white">
                        <FeatureCard number={"IV"} title={"Experience."} note="*Limits apply">
                            Membership grants you unlimited access* to WDCC’s extensive wine and champagne repositories,
                            two complimentary tickets to all regular WDCC events, and, most importantly, the knowledge
                            that you’re joining a collective of like-minded individuals who share a sophisticated world
                            view.
                        </FeatureCard>
                        <FeatureCard number={"V"} title={"Knowledge."}>
                            <p>
                                WDCC members carry with them the shared expertise of WDCC’s centuries-long history in
                                the arts of fine winemaking, tasting, and craft.
                            </p>
                            <p>
                                It is a shared legacy that dates back to 1613, from the small clubhouse in the outskirts
                                of Okurando, New Zealand, where founder Hatsune Miku first crafted a vintage wine.
                            </p>
                        </FeatureCard>
                        <FeatureCard number={"VI"} title={"Virtue."}>
                            <p>
                                Revel in the mindset that you are more than a Computer Science student. You are one of a
                                small enclave that has seen the WDCC ideal; the moral that wine drinking - not LeetCode
                                - is the sole pathway to academic and financial success.
                            </p>
                            <p>
                                It is a realisation that many will have too late. But not you.
                            </p>
                        </FeatureCard>
                    </div>
                    <button
                        className="mx-auto w-fit border-[1px] border-white px-5 pb-[10px] pt-[12px] text-white text-sm my-6 bg-none fill-none hover:opacity-75 transition duration-300">
                        LEARN MORE
                    </button>
                </div>

                <div className="border-y-[1px] border-white py-36 flex flex-col items-center justify-center gap-32">
                    <div
                        className="w-[clamp(300px,75%,1800px)] mx-auto grid grid-cols-[4fr_3fr]">
                        <p className="text-[74px] tracking-[-1.28px]  leading-none text-white">
                            For all <em>you</em> are.
                        </p>
                        <div className="flex flex-col gap-4 my-4">
                            <p className="text-md text-white opacity-75">[VII]</p>
                            <p className="text-white text-md leading-[1.3] max-w-[550px]">
                                Joining WDCC isn’t just about wine and champagne. It’s about friendship, connections,
                                and the bonds you make with your fellow UoA programmers, PMs, TLs, and designers over a
                                good glass of 2011 Château Lafleur - or perhaps 2017 vintage Veuve Clicquot?
                            </p>
                            <div className="flex flex-col gap-2 my-10 max-w-[350px]">
                                <p className="text-white text-lg leading-tight">
                                    &quot;One does not join WDCC for the wine. The wise join because they feel it is friends.
                                    It is family. &quot;
                                </p>
                                <div className="flex gap-3 text-white italic opacity-75">
                                    <span className="tracking-[2.88px]">SUN TZU</span>
                                    <span className="italic">in The Art of War</span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[clamp(300px,75%,1800px)] mx-auto">
                        <p className="text-[74px] tracking-[-1.28px]  leading-none text-[#FCE7CF]">
                            The Champagne <em>Upgrade</em>.
                        </p>
                        <div className="flex flex-col gap-4 my-12">
                            <p className="text-md text-white opacity-75">[VIII]</p>
                            <p className="text-white text-md leading-[1.3] max-w-[550px]">
                                Get a bottle of specially selected, single-origin boutique champagne delivered to your
                                room/flat once, twice, or three times monthly. Unlock your ultimate potential.
                            </p>
                            <p className="text-white text-md leading-[1.3] max-w-[550px]">
                                Delivery available only to University of Auckland student accommodations and halls of
                                residence.
                            </p>

                            <button
                                className="w-fit border-[1px] border-white px-5 pb-[10px] pt-[12px] text-white text-sm my-6 bg-none fill-none hover:opacity-75 transition duration-300">
                                LEARN MORE
                            </button>

                        </div>
                    </div>

                </div>

                <div className="h-[50vh] w-full flex flex-col">

                    <Image className="h-[50vh] w-full object-cover brightness-[0.3] saturate-[0.25] absolute"
                         src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Mainschleife_Weinberge_Herbst_140502-Pano.jpg/2048px-Mainschleife_Weinberge_Herbst_140502-Pano.jpg?20190904214257"}
                         alt={"waiheke island"} />

                    <div className="py-6 h-full">
                        <div
                            className="h-full z-10 relative w-[clamp(300px,75%,1800px)] mx-auto grid grid-cols-[1fr_3fr] divide-x-[1px] divide-white">

                            <div>
                            </div>

                            <div className="h-full py-16 pl-24 flex flex-col justify-between">
                                <div className="flex flex-col gap-2 max-w-[700px]">
                                    <p className="text-md text-white opacity-75">[IX]</p>
                                    <p className="text-white text-md leading-tight">
                                        &quot;A role model for inclusivity. Boutique wine tasting is such a student-friendly
                                        hobby, and I am so glad that there are still groups focusing on the more
                                        affordable activities out there. I cannot believe nobody thought of this sooner.
                                        It is fair to say WDCC may be one of the <em>least privileged</em> clubs in the
                                        entire University. &quot;
                                    </p>
                                    <div className="flex gap-3 text-white italic opacity-75">
                                        <span className="tracking-[2.88px]">DAWN FRESHWATER</span>
                                    </div>
                                </div>
                                <p className="text-[74px] tracking-[-1.28px]  leading-none text-white">
                                    This is <em>forever.</em>
                                </p>

                            </div>


                        </div>
                    </div>
                </div>

                <div className="border-y-[1px] border-white py-12">
                    <div
                        className="py-44 w-[clamp(300px,75%,1800px)] mx-auto flex gap-4 text-center justify-center">
                        <span className="text-md text-white opacity-75 leading-none">[X]</span>
                        <span className="text-white text-lg leading-none">
                            Go for the wine drinking and champagne <em>stars</em>.
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#FFE2B7] text-sm tracking-[2.2px] text-center">
                            <em>the</em> WINE DRINKING & CHAMPAGNE CLUB
                        </p>
                        <p className="text-[#FFE2B7] text-xs tracking-[2.2px] text-center">
                            <em>est 1613</em>
                        </p>
                    </div>

                </div>


            </div>

        </StandardPageLayout>
    );
}
