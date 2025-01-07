import { HTMLAttributes } from "react";

import { footerData } from "@/components/navigation/footer/_data/footer.data";
import FooterFooter from "@/components/navigation/footer/FooterFooter";
import { cn } from "@/libs/utils";

import FooterColumn from "./FooterColumn";

interface FooterProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export default function Footer({ className, ...props }: FooterProps) {
    return (
        <footer {...props} className={cn("flex justify-center pb-20 pt-4 bg-blue-900 text-white xs:px-10", className)}>
            <div className="w-full whitespace-nowrap lg:max-w-screen-md">
                <div className="hidden-scrollbar flex flex-col justify-between gap-4 overflow-x-auto px-4 sm:flex-row">
                    {footerData.columns.map((data) => (
                        <FooterColumn key={data.title} title={data.title} links={data.links} />
                    ))}
                </div>
                <FooterBar />
                <FooterFooter socials={footerData.socials} friends={footerData.friends} />
            </div>
        </footer>
    );
}

function FooterBar() {
    return <div className="my-8 h-[3px] w-full rounded-full bg-gradient-to-tr from-blue-300 to-blue-500" />;
}
