import { HTMLAttributes } from "react";
import FooterFooter from "@/components/layout/footer/components/FooterFooter";
import { footerData } from "@/components/layout/footer/data/footerData";
import { cn } from "@/utils/misc";
import { FooterBar } from "./components/FooterBar";
import FooterColumn from "./components/FooterColumn";

export type FooterProps = {
    className?: string;
} & HTMLAttributes<HTMLDivElement>;

export function Footer({ className, ...props }: FooterProps) {
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
