import { NavigationLinkType } from "@/types/navigation";
import type { ClassName } from "@/types/utils";

import WDCCLogo from "@/assets/svg/WDCCLogo";
import Arrow from "@/assets/svg/Arrow";
import DropDown from "@/components/navigation/navbar/DropDownLink";
import { PageLink } from "@/components/navigation/PageLink";
import { Button } from "@/components/primitives/Button";
import { navigationLinkData } from "@/data/links/navigationLinks.data";
import { cn } from "@/libs/utils";

import { Anchor } from "../../primitives/Anchor";
import NavigationMenu from "./NavigationMobileMenu";

export default function NavigationBar({ className }: ClassName) {
    return (
        <nav
            className={cn(
                "flex select-none flex-col items-center justify-between gap-4 px-16 py-4 sm:flex-row lg:py-6 backdrop-blur-sm",
                className
            )}
        >
            <Anchor href="/">
                <WDCCLogo className="fill-black lg:block transition duration-150 hover:opacity-70"/>
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
                    <Anchor href="https://go.wdcc.co.nz" newTab>
                        <Button variant="primary" color="blue" className="whitespace-pre">
                            Join WDCC  <Arrow/>
                        </Button>
                    </Anchor>
                </div>
            </div>
        </nav>
    );
};

const NavigationBarLinks = ({ links }: { links: NavigationLinkType[] }) =>
    // z-10 is to ensure top-level nav links sit on top of sublinks
    links.map((link) =>
        link.drop ? (
            <DropDown key={link.label} link={link} className="z-10" />
        ) : (
            <PageLink key={link.label} href={link.href} className="z-10">
                {link.label}
            </PageLink>
        )
    );