import { footerData } from "@/components/navigation/footer/_data/footer.data";
import { cn } from "@/libs/utils";

import FooterColumn from "./FooterColumn";
import FooterSocials from "./FooterSocials";

export default function Footer() {
    return (
        <footer className="mt-auto flex flex-col items-center bg-blue-900 pb-20">
            <div
                className={cn(
                    "grid w-[clamp(300px,100%,1200px)] grid-cols-1 whitespace-nowrap px-10 pt-4 text-white sm:grid-cols-3 lg:grid-cols-5"
                )}
            >
                {/* grid block of 1-3-1 with center being the contents */}
                <div className="hidden lg:block"></div>
                {footerData.columns.map((data, i) => (
                    <FooterColumn key={data.title} {...data} last={i === 2} />
                ))}
                <div className="hidden lg:block"></div>
                {/* second row */}
                <FooterSocials />
            </div>
        </footer>
    );
}
