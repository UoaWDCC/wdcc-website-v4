import type { ClassName } from "@/types/utils";

import Arrow from "@/assets/svg/Arrow";
import WDCCLogo from "@/assets/svg/WDCCLogo";
import { navbarData } from "@/components/navigation/navbar/_data/navbar.data";
import { NavigationLink } from "@/components/navigation/navbar/_data/navbarTypes";
import DropDown from "@/components/navigation/navbar/DropDownLink";
import { UnderlineLink } from "@/components/navigation/UnderlineLink";
import { Button } from "@/components/primitives/Button";
import { cn } from "@/libs/utils";

import { Anchor } from "../../primitives/Anchor";
import NavigationMenu from "./NavigationMobileMenu";

export default function NavigationBar({ className }: ClassName) {
    return (
        <nav
            className={cn(
                "relative flex select-none flex-col items-center justify-between gap-4 px-16 py-4 sm:flex-row lg:py-6",
                className
            )}
        >
            {/* progressive blur */}
            <div className="absolute inset-0 isolate -z-10 size-full">
                <div className="absolute h-1/5 w-full backdrop-blur-[2px]" />
                <div className="absolute h-2/5 w-full backdrop-blur-[2px]" />
                <div className="absolute h-3/5 w-full backdrop-blur-[1px]" />
                <div className="absolute h-4/5 w-full backdrop-blur-[0.5px]" />
                <div className="absolute h-full w-full backdrop-blur-[0.5px]" />
            </div>
            <Anchor href="/">
                <WDCCLogo className="fill-black transition duration-150 hover:opacity-70 lg:block" />
            </Anchor>
            <div className="flex items-center gap-8 font-semibold lg:gap-12">
                {/* Links */}
                <div className="hidden h-full items-center gap-8 md:flex lg:gap-12">
                    <NavigationBarLinks links={navbarData.links} />
                </div>
                {/* Vertical line */}
                <div className="hidden h-5 w-0.5 rounded bg-gray-700 md:block" />
                {/* Buttons */}
                <div className="flex gap-3">
                    <NavigationMenu className="md:hidden" links={navbarData.links} />
                    <Button variant="primary" color="blue" href="https://go.wdcc.co.nz" newTab>
                        Join WDCC <Arrow />
                    </Button>
                </div>
            </div>
        </nav>
    );
}

const NavigationBarLinks = ({ links }: { links: NavigationLink[] }) =>
    // z-10 is to ensure top-level nav links sit on top of sublinks
    links.map((link) =>
        link.drop ? (
            <DropDown key={link.label} link={link} className="z-10" href={link.href} />
        ) : (
            <UnderlineLink key={link.label} href={link.href} className="z-10">
                {link.label}
            </UnderlineLink>
        )
    );
