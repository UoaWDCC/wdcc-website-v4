import { AnchorHTMLAttributes, ReactNode } from "react";

import Link, { LinkProps } from "next/link";

import { cn } from "@/libs/utils";

// Need to omit href from AnchorHTMLAttributes because it conflicts with Next LinkProps
type UnderlineLinkProps = {
    mode?: "light" | "dark"; // Underline color
    shift?: boolean; // Controls whether the underline shifts on hover
    children: ReactNode;
    newTab?: boolean;
} & LinkProps &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

// See variant in src/components/navigation/navbar/DropDownLink.tsx
export const UnderlineLink = ({ children, newTab, mode = "dark", shift, ...props }: UnderlineLinkProps) => {
    return (
        <Link {...props} target={newTab ? "_blank" : "_self"}>
            <div className="group z-10 w-min">
                <p
                    className={cn(
                        shift && "transition-transform duration-300 group-hover:translate-x-1 group-hover:duration-150"
                    )}
                >
                    {children}
                </p>
                <div
                    className={cn(
                        "pointer-events-none h-0.5 w-0 rounded-sm transition-[width,transform] duration-300 group-hover:w-1/2 group-hover:duration-150",
                        shift && "group-hover:translate-x-1",
                        mode === "light" ? "bg-blue-100" : "bg-gray-700"
                    )}
                />
            </div>
        </Link>
    );
};
