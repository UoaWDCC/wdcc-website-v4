import { NavigationLinkType } from "@/types/navigation";
import type { ClassName } from "@/types/utils";

import WDCCLogo from "@/assets/svg/WDCCLogo";
import DropDown from "@/components/navigation/navbar/DropDownLink";
import { PageLink } from "@/components/navigation/PageLink";
import { Button } from "@/components/primitives/Button";
import { navigationLinkData } from "@/data/links/navigationLinks.data";
import { cn } from "@/libs/utils";

import { Anchor } from "../../primitives/Anchor";
import NavigationMenu from "./NavigationMobileMenu";

const NavigationBar = ({ className }: ClassName) => {
    return (
        <div
            className={cn(
                "flex select-none flex-col items-center justify-between gap-4 px-16 py-4 sm:flex-row lg:py-6",
                className
            )}
        >
            <WDCCLogo className="fill-black lg:block" />
            <div className="flex items-center gap-8 font-semibold lg:gap-12">
                {/* Links */}
                <div className="hidden h-full items-center gap-8 md:flex lg:gap-12">
                    <NavigationBarLinks links={navigationLinkData} />
                </div>
                {/* Vertical line */}
                <div className="hidden h-5 w-0.5 rounded bg-black md:block" />
                {/* Buttons */}
                <div className="flex gap-3">
                    <NavigationMenu className="md:hidden" links={navigationLinkData} />
                    <Anchor href="https://go.wdcc.co.nz" newTab>
                        <Button set={{ type: "primary", color: "blue" }} className="whitespace-pre">
                            Join WDCC ➔
                        </Button>
                    </Anchor>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;

const NavigationBarLinks = ({ links }: { links: NavigationLinkType[] }) =>
    links.map((link) =>
        link.drop ? (
            <DropDown key={link.label} link={link} />
        ) : (
            <PageLink key={link.label} href={link.href}>
                {link.label}
            </PageLink>
        )
    );