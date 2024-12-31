import { NavigationLinkType } from "@/types/navigation";
import type { ClassName } from "@/types/utils";

import Arrow from "@/assets/svg/Arrow";
import WDCCLogo from "@/assets/svg/WDCCLogo";
import DropDown from "@/components/navigation/navbar/DropDownLink";
import { UnderlineLink } from "@/components/navigation/UnderlineLink";
import { Button } from "@/components/primitives/Button";
import { navigationLinkData } from "@/data/links/navigationLinks.data";
import { cn } from "@/libs/utils";

import { Anchor } from "../../primitives/Anchor";
import NavigationMenu from "./NavigationMobileMenu";

export default function NavigationBar({ className }: ClassName) {
    return (
        <nav
            className={cn(
                "flex select-none flex-col items-center justify-between gap-4 px-16 py-4 backdrop-blur-sm sm:flex-row lg:py-6",
                className
            )}
        >
            <Anchor href="/">
                <WDCCLogo className="fill-black transition duration-150 hover:opacity-70 lg:block" />
            </Anchor>
            <div className="flex items-center gap-8 font-semibold lg:gap-12">
                {/* Links */}
                <div className="hidden h-full items-center gap-8 md:flex lg:gap-12">
                    <NavigationBarLinks links={navigationLinkData} />
                </div>
                {/* Vertical line */}
                <div className="hidden h-5 w-0.5 rounded bg-gray-700 md:block" />
                {/* Buttons */}
                <div className="flex gap-3">
                    <NavigationMenu className="md:hidden" links={navigationLinkData} />
                    <Button set={{ variant: "primary", color: "blue" }} href="https://go.wdcc.co.nz" newTab>
                        Join WDCC <Arrow />
                    </Button>
                </div>
            </div>
        </nav>
    );
}

const NavigationBarLinks = ({ links }: { links: NavigationLinkType[] }) =>
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
