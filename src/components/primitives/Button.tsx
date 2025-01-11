"use client";

import type { HTMLAttributes, ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/libs/utils";

const button = tv({
    base: "flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-2 text-md font-bold transition duration-200 hover:cursor-pointer",
    variants: {
        style: {
            primary: "border-2 py-[calc(0.5rem-2px)]",
            secondary: "",
            tertiary: "border-2 py-[calc(0.5rem-2px)]",
            text: "",
        },
        color: {
            blue: "",
            yellow: "",
            purple: "",
            dark: "",
            light: "",
        },
        width: {
            full: "w-full",
            fit: "w-fit",
        },
        isJustified: {
            true: "w-full",
        },
    },
    defaultVariants: {
        style: "primary",
        color: "blue",
        width: "fit",
    },
    compoundVariants: [
        {
            style: "primary",
            color: "blue",
            class: "border-blue-600 bg-blue-500 text-white hover:bg-blue-400",
        },
        {
            style: "primary",
            color: "yellow",
            class: "border-yellow-400 bg-yellow-brand text-gray-800 hover:bg-yellow-200",
        },
        {
            style: "primary",
            color: "purple",
            class: "border-purple-600 bg-purple-500 text-white hover:bg-purple-400",
        },
        {
            style: "primary",
            color: "dark",
            class: "border-gray-600 bg-gray-800 text-white hover:bg-gray-700",
        },
        {
            style: "primary",
            color: "light",
            class: "border-gray-200 bg-gray-100 text-gray-800 hover:bg-gray-100",
        },
        {
            style: "secondary",
            color: "blue",
            class: "bg-blue-100 text-blue-750 hover:bg-blue-150",
        },
        {
            style: "secondary",
            color: "yellow",
            class: "bg-yellow-100 text-yellow-750 hover:bg-yellow-150",
        },
        {
            style: "secondary",
            color: "purple",
            class: "bg-purple-100 text-purple-750 hover:bg-purple-150",
        },
        {
            style: "secondary",
            color: "dark",
            class: "bg-[#2E2B3B33] text-gray-800 hover:bg-[#2E2B3B26]",
        },
        {
            style: "secondary",
            color: "light",
            class: "bg-[#C8C6D24D] text-white hover:bg-[#C8C6D233]",
        },
        {
            style: "tertiary",
            color: "blue",
            class: "border-blue-200 text-blue-750 hover:bg-blue-50",
        },
        {
            style: "tertiary",
            color: "yellow",
            class: "border-yellow-200 text-yellow-750 hover:bg-yellow-50",
        },
        {
            style: "tertiary",
            color: "purple",
            class: "border-purple-200 text-purple-750 hover:bg-purple-50",
        },
        {
            style: "tertiary",
            color: "dark",
            class: "border-gray-800 border-opacity-20 text-gray-800 hover:bg-[#2E2B3B0D]",
        },
        {
            style: "tertiary",
            color: "light",
            class: "border-gray-600 border-opacity-30 text-white hover:bg-[#C8C6D20D]",
        },
        {
            style: "text",
            color: "blue",
            class: "text-blue-750 hover:underline",
        },
        {
            style: "text",
            color: "yellow",
            class: "text-yellow-750 hover:underline",
        },
        {
            style: "text",
            color: "purple",
            class: "text-purple-750 hover:underline",
        },
        {
            style: "text",
            color: "dark",
            class: "text-gray-800 hover:underline",
        },
        {
            style: "text",
            color: "light",
            class: "text-white hover:underline",
        },
    ],
});

type CommonProps = {
    children: ReactNode;
};

type Variant = { variant?: VariantProps<typeof button> };

// Type if rendered as a button (no href provided)
type ButtonVersionProps = Variant & HTMLAttributes<HTMLButtonElement> & CommonProps & { href?: never };

// Type if rendered as a Link (href provided)
type LinkVersionProps = Variant & LinkProps & CommonProps & { href: string; newTab?: boolean; className?: string };

// Type guard to determine if the props are for a Link or Button
function isLinkProps(props: ButtonVersionProps | LinkVersionProps): props is LinkVersionProps {
    return props.href !== undefined;
}

/**
 * General button component for navigation and click actions.
 *
 * Takes the following parameters as props of variants:
 * @variation style [primary, secondary, tertiary, text] - the general style and importance of the button, see Figma.
 * @variation color [blue, yellow, purple, dark, light] - the color of the button.
 * @variation isJustified [false, true] - whether the element scales to the full width of the parent.
 *
 * example usage:
 * <Button variant={{ style: "primary", color: "blue", isJustified={true} }}>primary blue</Button>
 *
 * and any other button props.
 *
 * Labels are provided as children of this element.
 * This Button dynamically determines its element type as either <button/> or <Link/> depending on the optional href attribute.
 */

function Button(props: ButtonVersionProps | LinkVersionProps) {
    // Conditionally render as Link or button depending on whether a local link (href attribute) is provided.
    if (isLinkProps(props)) {
        // Is Link
        const { children, href, className, newTab = false, ...rest } = props;
        // TODO: use our anchor component for this
        return (
            <Link
                {...rest}
                href={href}
                className={cn(button(props.variant), className)}
                target={newTab ? "_blank" : "_self"}
            >
                {children}
            </Link>
        );
    } else {
        // Is button
        const { children, className } = props;
        return (
            <button {...props} className={cn(button(props.variant), className)}>
                {children}
            </button>
        );
    }
}

export { Button };
