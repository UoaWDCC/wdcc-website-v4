import { AnchorHTMLAttributes, ReactNode } from "react";
import Link, { LinkProps } from "next/link";

import { cn } from "@/libs/utils";

// Need to omit href from AnchorHTMLAttributes because it conflicts with Next LinkProps
interface UnderlineLinkProps extends LinkProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
    mode?: "light" | "dark"; // Underline color
    shift?: boolean; // Controls whether the underline shifts on hover
    children: ReactNode;
    newTab?: boolean;
}

// See variant in src/components/navigation/navbar/DropDownLink.tsx
export const UnderlineLink = ({ children, newTab, mode = "dark", shift, ...props }: UnderlineLinkProps) => {
    return (
        <Link {...props} target={newTab ? "_blank" : "_self"}>
            <div className="group z-10 w-min">
                <p className={cn(shift && "transition-transform group-hover:translate-x-1")}>{children}</p>
                <div
                    className={cn(
                        "pointer-events-none h-0.5 w-0 rounded transition-[width] group-hover:w-1/2",
                        shift && "transition-transform group-hover:translate-x-1",
                        mode === "light" ? "bg-blue-100" : "bg-gray-700"
                    )}
                />
            </div>
        </Link>
    );
};
