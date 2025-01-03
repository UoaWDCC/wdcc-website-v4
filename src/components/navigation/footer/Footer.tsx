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
                    <FooterColumn key={data.title} {...data} last={i === 2} />
                ))}
                {/* second row */}
                <FooterSocials className="mt-8 sm:col-span-3" />
            </div>
        </footer>
    );
}
