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
        <footer {...props} className={cn("xs:px-10 flex justify-center bg-blue-900 pt-12 pb-16 text-white", className)}>
            <div className="flex w-full flex-col gap-8 whitespace-nowrap lg:max-w-(--breakpoint-md)">
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
    return <div className="h-[3px] w-full rounded-full bg-linear-to-tr from-blue-300 to-blue-500" />;
}
