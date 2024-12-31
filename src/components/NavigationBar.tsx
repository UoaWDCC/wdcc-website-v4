import type { ClassName } from "@/types/utils";

import WDCCLogo from "@/assets/svg/WDCCLogo";
import { navigationLinkData } from "@/data/links/navigationLinks.data";
import { cn } from "@/libs/utils";

import { GenerateNavigationBarLinks } from "./navigation/generate/GenerateNavigationLinks";
import NavigationMenu from "./navigation/NavigationMenu";
import { Anchor } from "./primitives/Anchor";

const NavigationBar = ({ className }: ClassName) => {
    return (
        <div
            className={cn("flex select-none flex-col items-center justify-between gap-4 px-12 sm:flex-row", className)}
        >
            <WDCCLogo className="*:fill-black lg:block" />
            <div className="flex items-center gap-8 font-semibold">
                <div className="hidden h-full items-center gap-16 md:flex">
                    <GenerateNavigationBarLinks links={navigationLinkData} />
                    <div className="h-5 w-0.5 rounded bg-black" />
                </div>
                <div className="flex gap-3">
                    <Anchor set={{ type: "muted", rounded: true }} href="/socials  ">
                        Our socials
                    </Anchor>
                    <Anchor set={{ type: "primary", rounded: true }} href="/socials  ">
                        Join WDCC
                    </Anchor>
                    <NavigationMenu className="md:hidden" links={navigationLinkData} />
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
