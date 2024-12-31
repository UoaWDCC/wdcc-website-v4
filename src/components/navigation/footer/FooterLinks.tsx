import type { FooterLink } from "@/types/navigation";

import { footerLinkData } from "@/data/links/footerLinks.data";
import { cn } from "@/libs/utils";

import FooterSocials from "./FooterSocials";
import FooterBlock from "./FooterBlock";

const FooterLinks = () => {
    return (
        <footer className="mt-auto flex flex-col items-center bg-blue-900 pb-20">
            <div
                className={cn(
                    "grid w-[clamp(300px,100%,1200px)] grid-cols-1 whitespace-nowrap px-10 pt-4 text-white sm:grid-cols-3 lg:grid-cols-5"
                )}
            >
                {/* grid block of 1-3-1 with center being the contents */}
                <div className="hidden lg:block"></div>
                {(footerLinkData as FooterLink[]).map((data, i) => (
                    <FooterBlock key={data.title} {...data} last={i === 2} />
                ))}
                <div className="hidden lg:block"></div>
                {/* second row */}
                <FooterSocials />
            </div>
        </footer>
    );
};

export default FooterLinks;
