import type { NavigationLinkType } from "@/types/navigation";

import DropDown from "@/components/navigation/navbar/DropDownLink";
import { Anchor } from "@/components/primitives/Anchor";

import { PageLink } from "../PageLink";

export const NavigationBarLinks = ({ links }: { links: NavigationLinkType[] }) =>
    links.map((link) =>
        link.drop ? (
            <DropDown key={link.label} link={link} />
        ) : (
            <PageLink key={link.label} href={link.href}>
                {link.label}
            </PageLink>
        )
    );

export const NavigationMenuLinks = ({ links }: { links: NavigationLinkType[] }) =>
    links.map((link) => (
        <Anchor key={link.label} href={link.href} className="w-full text-center text-[15vw]">
            {link.label}
        </Anchor>
    ));