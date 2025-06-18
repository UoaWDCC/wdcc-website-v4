import FooterFriends from "@/components/old/navigation/footer/FooterFriends";
import FooterSocials from "@/components/old/navigation/footer/FooterSocials";
import { LinkType } from "@/types/misc/Link";
import { FooterSocial } from "./_data/footerTypes";

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
