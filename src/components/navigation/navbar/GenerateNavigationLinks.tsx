import React from "react";

import type { NavigationLinkType } from "@/types/navigation";

import { Anchor, PageLink } from "@/components/primitives/Anchor";
import DropDown from "@/components/primitives/DropDown";

export const GenerateNavigationBarLinks = ({ links }: { links: NavigationLinkType[] }) =>
    links.map((link) =>
        link.drop ? (
            <DropDown key={link.label} link={link} />
        ) : (
            <PageLink key={link.label} href={link.href}>
                {link.label}
            </PageLink>
        )
    );

export const GenerateNavigationMenuLinks = ({ links }: { links: NavigationLinkType[] }) =>
    links.map((link) => (
        <Anchor key={link.label} href={link.href} className="w-full text-center text-[15vw]">
            {link.label}
        </Anchor>
    ));
