import Image from "next/image";

import Arrow from "@/assets/svg/Arrow";
import StandardPageLayout from "@/components/layout/StandardPageLayout";
import { Button } from "@/components/primitives/Button";

/*THIS USES THE FOOTER CODE BECAUSE IT'S A QUICK FIX LOL*/
/* insert SOBBING EMOJI here */
import { footerData } from "@/components/navigation/footer/_data/footer.data";
import { FooterSocial } from "@/components/navigation/footer/_data/footerTypes";
import { Anchor } from "@/components/primitives/Anchor";
import { cn } from "@/libs/utils";


export default function SocialsPage() {

    const socials = footerData.socials;

    return (
        <StandardPageLayout navColor="dark">
            <div className="responsive-fullwidth bg-blue-brand min-h-screen grid place-items-center">
                <div className="w-[80%] flex flex-col gap-8 text-center items-center justify-center">
                    <div className="flex flex-col text-white text-md">
                        <h1 className="text-white font-bold text-lg">Come check us out :)</h1>
                        <p className="opactiy-50 font-semibold leading-tight">Follow WDCC on our socials, join us, or just look around our website!</p>
                    </div>


                    <div className="flex w-full items-center justify-center gap-6">
                        {socials.map((social) => (
                            <Anchor
                                key={social.name}
                                href={social.href}
                                className="[&>svg]:fill-white [&>svg]:transition [&>svg]:duration-200 [&>svg]:hover:fill-blue-200"
                            >
                                {social.icon}
                            </Anchor>
                        ))}
                    </div>

                    <div className="flex flex-col gap-2 justify-center items-center">
                        <p className="font-semibold text-md text-white/50">and...</p>
                        <Button variant={{ color: "purple", style: "primary" }}>
                            <Arrow className=""/>
                            Join WDCC for 2025!
                        </Button>
                        <Button variant={{ color: "purple", style: "secondary" }}>
                            <Arrow className="rotate-180"/>
                            Visit our new website!
                        </Button>
                    </div>

                </div>
            </div>
        </StandardPageLayout>
    );
}
