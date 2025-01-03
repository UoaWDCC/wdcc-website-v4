import { LinkType } from "@/types/link";

import Arrow from "@/assets/svg/Arrow";
import { Button } from "@/components/primitives/Button";

export default function FooterFriends({ friends }: { friends: LinkType[] }) {
    return (
        <div className="flex justify-end items-center gap-2">
            <p className="text-xs font-semibold">Check out our friends</p>
            {friends.map((friend) => (
                <FriendLink key={friend.href} friend={friend} />
            ))}
        </div>
    );
}

interface FriendLinkProps {
    friend: LinkType;
}

export function FriendLink({ friend }: FriendLinkProps) {
    const { label, href, external } = friend;

    return (
        <Button
            variant="secondary"
            href={href}
            newTab={external}
            className="px-4 py-[2px] text-xs font-normal text-white bg-[rgba(200,198,210,0.30)] hover:bg-[rgba(200,198,210,0.40)]"
        >
            {label} <Arrow />
        </Button>
    );
}
