import { Link } from "@/types/misc/Link";
import Arrow from "@/assets/svg/Arrow";
import { Button } from "@/components/primitives/Button";

export default function FooterFriends({ friends }: { friends: Link[] }) {
    return (
        <div className="flex flex-col items-center justify-end gap-2 sm:flex-row">
            <p className="text-xs font-semibold">Check out our friends</p>
            <div className="flex flex-wrap items-center justify-center gap-2">
                {friends.map((friend) => (
                    <FriendLink key={friend.href} friend={friend} />
                ))}
            </div>
        </div>
    );
}

type FriendLinkProps = {
    friend: Link;
};

export function FriendLink({ friend }: FriendLinkProps) {
    const { label, href, external } = friend;

    return (
        <Button
            className="bg-gray-200/30 px-4 py-0.5 text-xs font-normal text-white transition-all duration-500 hover:gap-4 hover:bg-gray-200/40 hover:duration-200"
            variant={{ style: "secondary" }}
            href={href}
            newTab={external}
        >
            {label} <Arrow />
        </Button>
    );
}
