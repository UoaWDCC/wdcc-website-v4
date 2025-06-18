import Arrow from "@/assets/svg/Arrow";
/*THIS USES THE FOOTER CODE BECAUSE IT'S A QUICK FIX LOL*/
/* insert SOBBING EMOJI here */
import { footerData } from "@/components/layout/footer/data/footerData";
import StandardPageLayout from "@/components/layout/pagelayouts/StandardPageLayout";
import { Anchor } from "@/components/primitives/Anchor";
import { Button } from "@/components/primitives/Button";

export default function SocialsPage() {
    const socials = footerData.socials;

    return (
        <StandardPageLayout navColor="dark">
            <div className="responsive-fullwidth bg-blue-brand grid min-h-screen place-items-center">
                <div className="flex w-[80%] flex-col items-center justify-center gap-8 text-center">
                    <div className="text-md flex flex-col text-white">
                        <h1 className="text-lg font-bold text-white">Come check us out :)</h1>
                        <p className="opactiy-50 leading-tight font-semibold">
                            Follow WDCC on our socials, join us, or just look around our website!
                        </p>
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

                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-md font-semibold text-white/50">and...</p>
                        <Button
                            variant={{ color: "purple", style: "primary" }}
                            href="https://docs.google.com/forms/d/e/1FAIpQLSf9p1n1GpuuFxXbhx_7iWDQkDqRpxVDAjUOeyyzYeavC6d48A/viewform"
                        >
                            <Arrow className="" />
                            Join WDCC for 2025!
                        </Button>
                        <Button variant={{ color: "purple", style: "secondary" }} href="/">
                            <Arrow className="rotate-180" />
                            Visit our new website!
                        </Button>
                    </div>
                </div>
            </div>
        </StandardPageLayout>
    );
}
