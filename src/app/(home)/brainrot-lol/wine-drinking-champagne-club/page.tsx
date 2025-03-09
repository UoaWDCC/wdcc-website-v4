"use client";

import { Cardo } from "next/font/google";
import Image from "next/image";

import mainschleifeLandscape from "@/assets/brainrot/mainschleife-landscape.jpg";
import tuscanyLandscape from "@/assets/brainrot/tuscany-landscape.jpg";
import w1 from "@/assets/brainrot/w1.jpg";
import w3 from "@/assets/brainrot/w3.jpg";
import StandardPageLayout from "@/components/layout/StandardPageLayout";

import FeatureCard from "./_components/FeatureCard";

{
    /* Font and other import logic held locally so the troll pages don't have external impact. */
}
const cardo = Cardo({ weight: ["400", "700"], style: ["italic", "normal"], subsets: ["latin"] });

export default function PricingPage() {
    return (
        <StandardPageLayout navColor={"dark"} className={`${cardo.className}`}>
            <div className="responsive-fullwidth min-h-screen bg-[#111121]">
                <div className="flex h-screen w-full flex-col justify-end">
                    <Image
                        className="absolute h-screen w-full object-cover brightness-[0.4] saturate-[.2]"
                        src={tuscanyLandscape}
                        alt={""}
                    />
                    <div className="relative z-10 mx-auto my-32 flex w-[clamp(300px,75%,1800px)] flex-col gap-4 text-white">
                        <h1 className="text-lg tracking-[2.2px] text-[#FFE2B7]">
                            <em>the</em> WINE DRINKING & CHAMPAGNE CLUB
                        </h1>
                        <div className="text-[74px] leading-none tracking-[-1.28px]">
                            <p>Unparalled refinement.</p>
                            <p>
                                Discerning <span className="italic">excellence</span>.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-y-[1px] border-white py-6">
                    <div className="mx-auto grid w-[clamp(300px,75%,1800px)] grid-cols-[3fr_2fr] gap-12 divide-x-[1px] divide-white">
                        <div className="flex max-w-[800px] flex-col gap-4 py-32">
                            <p className="text-md mb-4 text-white opacity-75">[I]</p>
                            <p className="text-lg leading-tight text-white">
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

                        <div className="flex h-full items-center justify-center pl-12">
                            <Image
                                className="h-[60%] object-cover object-left brightness-[0.4]"
                                src={w3}
                                alt={"miku wine"}
                            />
                        </div>
                    </div>
                </div>

                <div className="border-b-[1px] border-white py-32">
                    <div className="mx-auto flex w-[clamp(300px,75%,1800px)] flex-col items-center justify-center gap-12 text-lg leading-tight">
                        <p className="text-md mb-4 text-white opacity-75">[II]</p>
                        <div className="flex flex-col items-center justify-center gap-1 text-[#FFE2B7]">
                            <p className="text-white">
                                Beneath the canopy of stars, we grant CS/SE students a privilege few will ever see:
                            </p>
                            <p className="text-white">The ability to savour the finest wines on campus.</p>
                        </div>

                        <p className="text-white italic">This is no ordinary student organisation.</p>

                        <div className="flex flex-col items-center justify-center gap-1 text-[#FFE2B7]">
                            <p>This is the Wine Drinking and Champagne Club.</p>
                            <p>A premier beacon of elegance, taste, and elevation.</p>
                        </div>

                        <button className="mx-auto w-fit border-[1px] border-white bg-none fill-none px-5 pt-[12px] pb-[10px] text-sm text-white transition duration-300 hover:opacity-75">
                            LEARN MORE
                        </button>
                    </div>
                </div>

                <div className="flex h-[80vh] w-full flex-col">
                    <Image
                        className="absolute h-[80vh] w-full object-cover brightness-[0.4]"
                        src={w1}
                        alt={"waiheke island"}
                    />

                    <div className="h-full py-6">
                        <div className="relative z-10 mx-auto grid h-full w-[clamp(300px,75%,1800px)] grid-cols-[1fr_3fr] divide-x-[1px] divide-white">
                            <div></div>

                            <div className="flex h-full flex-col justify-between py-16 pl-24">
                                <p className="text-[74px] leading-none tracking-[-1.28px] text-white">
                                    What a <em>delightful</em> scenery.
                                </p>
                                <div className="">
                                    <p className="text-md mb-4 text-white opacity-75">[III]</p>
                                    <p className="text-md max-w-[550px] leading-tight text-white">
                                        WDCC wines are exclusively sourced from independent agreements with some of the
                                        world’s premier single-origin vineyards, under centuries of history and a
                                        perfect environment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 border-y-[1px] border-white py-6">
                    <div className="mx-auto grid w-[clamp(300px,75%,1400px)] grid-cols-[1fr_1fr_1fr] divide-x-[1px] divide-white">
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
                            <p>It is a realisation that many will have too late. But not you.</p>
                        </FeatureCard>
                    </div>
                    <button className="mx-auto my-6 w-fit border-[1px] border-white bg-none fill-none px-5 pt-[12px] pb-[10px] text-sm text-white transition duration-300 hover:opacity-75">
                        LEARN MORE
                    </button>
                </div>

                <div className="flex flex-col items-center justify-center gap-32 border-y-[1px] border-white py-36">
                    <div className="mx-auto grid w-[clamp(300px,75%,1800px)] grid-cols-[4fr_3fr]">
                        <p className="text-[74px] leading-none tracking-[-1.28px] text-white">
                            For all <em>you</em> are.
                        </p>
                        <div className="my-4 flex flex-col gap-4">
                            <p className="text-md text-white opacity-75">[VII]</p>
                            <p className="text-md max-w-[550px] leading-[1.3] text-white">
                                Joining WDCC isn’t just about wine and champagne. It’s about friendship, connections,
                                and the bonds you make with your fellow UoA programmers, PMs, TLs, and designers over a
                                good glass of 2011 Château Lafleur - or perhaps 2017 vintage Veuve Clicquot?
                            </p>
                            <div className="my-10 flex max-w-[350px] flex-col gap-2">
                                <p className="text-lg leading-tight text-white">
                                    &quot;One does not join WDCC for the wine. The wise join because they feel it is
                                    friends. It is family. &quot;
                                </p>
                                <div className="flex gap-3 text-white italic opacity-75">
                                    <span className="tracking-[2.88px]">SUN TZU</span>
                                    <span className="italic">in The Art of War</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto w-[clamp(300px,75%,1800px)]">
                        <p className="text-[74px] leading-none tracking-[-1.28px] text-[#FCE7CF]">
                            The Champagne <em>Upgrade</em>.
                        </p>
                        <div className="my-12 flex flex-col gap-4">
                            <p className="text-md text-white opacity-75">[VIII]</p>
                            <p className="text-md max-w-[550px] leading-[1.3] text-white">
                                Get a bottle of specially selected, single-origin boutique champagne delivered to your
                                room/flat once, twice, or three times monthly. Unlock your ultimate potential.
                            </p>
                            <p className="text-md max-w-[550px] leading-[1.3] text-white">
                                Delivery available only to University of Auckland student accommodations and halls of
                                residence.
                            </p>

                            <button className="my-6 w-fit border-[1px] border-white bg-none fill-none px-5 pt-[12px] pb-[10px] text-sm text-white transition duration-300 hover:opacity-75">
                                LEARN MORE
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex h-[50vh] w-full flex-col">
                    <Image
                        className="absolute h-[50vh] w-full object-cover brightness-[0.3] saturate-[0.25]"
                        src={
                            mainschleifeLandscape
                        }
                        alt={"waiheke island"}
                    />

                    <div className="h-full py-6">
                        <div className="relative z-10 mx-auto grid h-full w-[clamp(300px,75%,1800px)] grid-cols-[1fr_3fr] divide-x-[1px] divide-white">
                            <div></div>

                            <div className="flex h-full flex-col justify-between py-16 pl-24">
                                <div className="flex max-w-[700px] flex-col gap-2">
                                    <p className="text-md text-white opacity-75">[IX]</p>
                                    <p className="text-md leading-tight text-white">
                                        &quot;A role model for inclusivity. Boutique wine tasting is such a
                                        student-friendly hobby, and I am so glad that there are still groups focusing on
                                        the more affordable activities out there. I cannot believe nobody thought of
                                        this sooner. It is fair to say WDCC may be one of the <em>least privileged</em>{" "}
                                        clubs in the entire University. &quot;
                                    </p>
                                    <div className="flex gap-3 text-white italic opacity-75">
                                        <span className="tracking-[2.88px]">DAWN FRESHWATER</span>
                                    </div>
                                </div>
                                <p className="text-[74px] leading-none tracking-[-1.28px] text-white">
                                    This is <em>forever.</em>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-y-[1px] border-white py-12">
                    <div className="mx-auto flex w-[clamp(300px,75%,1800px)] justify-center gap-4 py-44 text-center">
                        <span className="text-md leading-none text-white opacity-75">[X]</span>
                        <span className="text-lg leading-none text-white">
                            Go for the wine drinking and champagne <em>stars</em>.
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-center text-sm tracking-[2.2px] text-[#FFE2B7]">
                            <em>the</em> WINE DRINKING & CHAMPAGNE CLUB
                        </p>
                        <p className="text-center text-xs tracking-[2.2px] text-[#FFE2B7]">
                            <em>est 1613</em>
                        </p>
                    </div>
                </div>
            </div>
        </StandardPageLayout>
    );
}
