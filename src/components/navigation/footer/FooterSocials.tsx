import DiscordLogo from "@/assets/svg/DiscordLogo";

import { Button } from "../../primitives/Button";

export default function FooterSocials() {
    return (
        // if bigger than sm, span 3 column and start at 2nd column else act like a normal div
        <div className="mt-8 flex flex-col sm:col-span-3 lg:col-start-2">
            <div className="h-1 w-full rounded-full bg-gradient-to-br from-blue-brand to-blue-750" />
            <div className="mt-8 flex w-full items-center justify-between">
                <DiscordLogo className="fill-white" />
                <Button variant="primary" color="blue">
                    Back to Top
                </Button>
            </div>
        </div>
    );
};
