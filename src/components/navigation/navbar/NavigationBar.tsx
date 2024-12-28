import type { ClassName } from "@/types/utils";

import WDCCLogo from "@/assets/svg/WDCCLogo";
import { Button } from "@/components/primitives/Button";
import { navigationLinkData } from "@/data/links/navigationLinks.data";
import { cn } from "@/libs/utils";

import { Anchor } from "../../primitives/Anchor";
import { GenerateNavigationBarLinks } from "./GenerateNavigationLinks";
import NavigationMenu from "./NavigationMenu";

const NavigationBar = ({ className }: ClassName) => {
    return (
        <div
            className={cn("flex select-none flex-col items-center justify-between gap-4 px-16 py-6 sm:flex-row", className)}
        >
            <WDCCLogo className="fill-black lg:block" />
            <div className="flex items-center gap-12 font-semibold">
                {/* Links */}
                <div className="hidden h-full items-center gap-12 md:flex">
                    <GenerateNavigationBarLinks links={navigationLinkData} />
                </div>
                {/* Vertical line */}
                <div className="h-5 w-0.5 rounded bg-black" />
                {/* Buttons */}
                <div className="flex gap-3">
                    <Anchor set={{ type: "muted", rounded: true }} href="/socials  ">
                        <Button set={{ type: "secondary", color: "blue" }}>Our socials</Button>
                    </Anchor>
                    <Anchor href="/socials">
                        <Button set={{ type: "primary", color: "blue" }} className="whitespace-pre">
                            Join WDCC ➔
                        </Button>
                    </Anchor>
                    <NavigationMenu className="md:hidden" links={navigationLinkData} />
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;