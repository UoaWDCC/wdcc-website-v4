import { footerData } from "@/components/navigation/footer/_data/footer.data";
import { cn } from "@/libs/utils";

import FooterColumn from "./FooterColumn";
import FooterSocials from "./FooterSocials";

export default function Footer() {
    return (
        <footer className="mt-auto flex flex-col items-center bg-blue-900 px-10 pt-4 pb-20">
            {/* Mobile: 1 column
                Tablet: 3 columns
                Desktop: 3 col, snap to max 768px
            */}
            <div
                className={cn(
                    "grid w-full grid-cols-1 whitespace-nowrap text-white sm:grid-cols-3 lg:max-w-screen-md",
                )}
            >
                {footerData.columns.map((data, i) => (
                    <FooterColumn key={data.title} title={data.title} links={data.links} last={i === 2} />
                ))}
                {/* blue bar */}
                <div className="h-1 w-full my-8 rounded-full bg-gradient-to-br from-[#1F86E6] to-[#6B74A1] sm:col-span-3" />
                <FooterSocials socials={footerData.socials} className="sm:col-span-3" />
            </div>
        </footer>
    );
}
