import React from "react";

import DiscordLogo from "../logo/DiscordLogo";

const FooterSocials = () => {
    return (
        // if bigger than sm, span 3 column and start at 2 column else act like a normal div
        <div className="mt-8 flex flex-col sm:col-span-3 lg:col-start-2">
            <div className="to-blue-750 from-blue-brand h-1 w-full rounded-full bg-gradient-to-br" />
            <div className="mt-8 flex w-full justify-center">
                <DiscordLogo className="fill-white" />
            </div>
        </div>
    );
};

export default FooterSocials;
