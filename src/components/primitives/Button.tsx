"use client";

import { ButtonHTMLAttributes, LinkHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
    base: "flex w-fit items-center justify-center rounded-full px-6 py-2 font-bold transition duration-200 hover:cursor-pointer",
    variants: {
        variant: {
            primary: "border-2",
            secondary: "",
            tertiary: "border-2",
            text: "",
        },
        color: {
            blue: "",
            yellow: "",
            purple: "",
            dark: "",
            light: "",
        },
        isJustified: {
            true: "w-full",
        },
    },
    defaultVariants: {
        variant: "primary",
        color: "blue",
    },
    compoundVariants: [
        {
            variant: "primary",
            color: "blue",
            class: "border-blue-600 bg-blue-500 text-white hover:bg-blue-400",
        },
        {
            variant: "primary",
            color: "yellow",
            class: "border-yellow-400 bg-yellow-brand text-gray-800 hover:bg-yellow-200",
        },
        {
            variant: "primary",
            color: "purple",
            class: "border-purple-600 bg-purple-500 text-white hover:bg-purple-400",
        },
        {
            variant: "primary",
            color: "dark",
            class: "border-gray-600 bg-gray-800 text-white hover:bg-gray-700",
        },
        {
            variant: "primary",
            color: "light",
            class: "border-gray-200 bg-gray-10 text-gray-800 hover:bg-gray-100",
        },
        {
            variant: "secondary",
            color: "blue",
            class: "bg-blue-100 text-blue-750 hover:bg-blue-150",
        },
        {
            variant: "secondary",
            color: "yellow",
            class: "bg-yellow-100 text-yellow-750 hover:bg-yellow-150",
        },
        {
            variant: "secondary",
            color: "purple",
            class: "bg-purple-100 text-purple-750 hover:bg-purple-150",
        },
        {
            variant: "secondary",
            color: "dark",
            class: "bg-[#2E2B3B33] text-gray-800 hover:bg-[#2E2B3B26]",
        },
        {
            variant: "secondary",
            color: "light",
            class: "bg-[#C8C6D24D] text-white hover:bg-[#C8C6D233]",
        },
        {
            variant: "tertiary",
            color: "blue",
            class: "border-blue-200 text-blue-750 hover:bg-blue-50",
        },
        {
            variant: "tertiary",
            color: "yellow",
            class: "border-yellow-200 text-yellow-750 hover:bg-yellow-50",
        },
        {
            variant: "tertiary",
            color: "purple",
            class: "border-purple-200 text-purple-750 hover:bg-purple-50",
        },
        {
            variant: "tertiary",
            color: "dark",
            class: "border-gray-800 border-opacity-20 text-gray-800 hover:bg-[#2E2B3B0D]",
        },
        {
            variant: "tertiary",
            color: "light",
            class: "border-gray-600 border-opacity-30 text-white hover:bg-[#C8C6D20D]",
        },
        {
            variant: "text",
            color: "blue",
            class: "text-blue-750 hover:underline",
        },
        {
            variant: "text",
            color: "yellow",
            class: "text-yellow-750 hover:underline",
        },
        {
            variant: "text",
            color: "purple",
            class: "text-purple-750 hover:underline",
        },
        {
            variant: "text",
            color: "dark",
            class: "text-gray-800 hover:underline",
        },
        {
            variant: "text",
            color: "light",
            class: "text-white hover:underline",
        },
    ],
});

type CommonProps = {
    children: ReactNode;
};

type ButtonProps = VariantProps<typeof button> &
    ButtonHTMLAttributes<HTMLButtonElement> &
    CommonProps & { href?: never };
type LinkProps = VariantProps<typeof button> & LinkHTMLAttributes<HTMLLinkElement> & CommonProps & { href: string };

// Type guard to determine if the props are for a Link or Button.
function isLinkProps(props: ButtonProps | LinkProps): props is LinkProps {
    return props.href !== undefined;
}

/**
 * General button component for navigation and click actions.
 *
 * Takes the following variants as props:
 * @variation Variant [primary, secondary, tertiary, text] - the general style and importance of the button, see Figma.
 * @variation Color [blue, yellow, purple, dark, light] - the color of the button.
 *
 * Takes the following additional props:
 * @param isJustified [false, true] - whether the element scales to the full width of the parent.
 * and any other button props.
 *
 * Labels are provided as children of this element.
 * This Button dynamically determines its element type as either <button/> or <Link/> depending on the optional href attribute.
 */
function Button(props: ButtonProps | LinkProps) {
    // Conditionally render as Link or button depending on whether a local link (href attribute) is provided.
    if (isLinkProps(props)) {
        // Is Link
        const { href, children } = props;
        return (
            <Link href={href} className={button(props)}>
                {children}
            </Link>
        );
    } else {
        // Is button
        const { children } = props;
        return (
            <button {...props} className={button(props)}>
                {children}
            </button>
        );
    }
};

export { Button };