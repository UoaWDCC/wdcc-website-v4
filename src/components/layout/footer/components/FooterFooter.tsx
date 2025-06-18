import FooterFriends from "@/components/layout/footer/components/FooterFriends";
import FooterSocials from "@/components/layout/footer/components/FooterSocials";
import { LinkType } from "@/types/misc/Link";
import { FooterSocial } from "../data/footerTypes";

type FooterFooterProps = {
    socials: FooterSocial[];
    friends: LinkType[];
};

export default function FooterFooter({ socials, friends }: FooterFooterProps) {
    return (
        <div className="hidden-scrollbar flex flex-col gap-8 overflow-x-auto px-2">
            <FooterSocials socials={socials} />
            <FooterFriends friends={friends} />
        </div>
    );
}
