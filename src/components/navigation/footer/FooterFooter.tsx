import { LinkType } from "@/types/link";

import FooterFriends from "@/components/navigation/footer/FooterFriends";
import FooterSocials from "@/components/navigation/footer/FooterSocials";

import { FooterSocial } from "./_data/footerTypes";

type FooterFooterProps = {
    socials: FooterSocial[];
    friends: LinkType[];
}

export default function FooterFooter({ socials, friends }: FooterFooterProps) {
    return (
        <div className="hidden-scrollbar flex flex-col gap-8 overflow-x-auto px-2">
            <FooterSocials socials={socials} />
            <FooterFriends friends={friends} />
        </div>
    );
}
