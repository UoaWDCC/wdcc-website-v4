import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            /* TODO Set when finalised */
            font1: ["sans-serif"],
            sans: ["sans-serif"],
        },
        fontWeight: {
            thin: "300",
            light: "400",
            normal: "500",
            semibold: "600",
            bold: "700",
            extrabold: "800",
        },
        fontSize: {
            /* Type scaling TBA, modify where needed */
            xs: "0.750rem", //12px
            sm: "0.875rem", //14px
            md: "1.000rem", //16px
            lg: "1.375rem", //22px
            xl: "1.625rem", //26px
            "2xl": "2rem", //32px
            "3xl": "2.375rem", // 38px
            "4xl": "3rem", // 48px
            "5xl": "4rem", // 64px
        },
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                sponsor: {
                    gold: "hsl(var(--sponsor-gold))",
                    tech: "hsl(var(--sponsor-tech))",
                    silver: "hsl(var(--sponsor-silver))",
                    community: "hsl(var(--sponsor-community))",
                },
                gray: {
                    900: "hsl(var(--gray-900))",
                    800: "hsl(var(--gray-800))",
                    700: "hsl(var(--gray-700))",
                    600: "hsl(var(--gray-600))",
                    500: "hsl(var(--gray-500))",
                    400: "hsl(var(--gray-400))",
                    300: "hsl(var(--gray-300))",
                    250: "hsl(var(--gray-250))",
                    200: "hsl(var(--gray-200))",
                    150: "hsl(var(--gray-150))",
                    100: "hsl(var(--gray-100))",
                    50: "hsl(var(--gray-050))",
                    20: "hsl(var(--gray-020))",
                    10: "hsl(var(--gray-010))",
                },
                orange: {
                    brand: "hsl(var(--orange-brand))",
                    900: "hsl(var(--orange-900))",
                    800: "hsl(var(--orange-800))",
                    750: "hsl(var(--orange-750))",
                    700: "hsl(var(--orange-700))",
                    600: "hsl(var(--orange-600))",
                    500: "hsl(var(--orange-500))",
                    400: "hsl(var(--orange-400))",
                    300: "hsl(var(--orange-300))",
                    200: "hsl(var(--orange-200))",
                    150: "hsl(var(--orange-150))",
                    100: "hsl(var(--orange-100))",
                    50: "hsl(var(--orange-050))",
                    20: "hsl(var(--orange-020))",
                },
                yellow: {
                    brand: "hsl(var(--yellow-brand))",
                    900: "hsl(var(--yellow-900))",
                    800: "hsl(var(--yellow-800))",
                    750: "hsl(var(--yellow-750))",
                    700: "hsl(var(--yellow-700))",
                    600: "hsl(var(--yellow-600))",
                    500: "hsl(var(--yellow-500))",
                    400: "hsl(var(--yellow-400))",
                    300: "hsl(var(--yellow-300))",
                    200: "hsl(var(--yellow-200))",
                    150: "hsl(var(--yellow-150))",
                    100: "hsl(var(--yellow-100))",
                    50: "hsl(var(--yellow-050))",
                    20: "hsl(var(--yellow-020))",
                },
                blue: {
                    brand: "hsl(var(--blue-brand))",
                    900: "hsl(var(--blue-900))",
                    800: "hsl(var(--blue-800))",
                    750: "hsl(var(--blue-750))",
                    700: "hsl(var(--blue-700))",
                    600: "hsl(var(--blue-600))",
                    500: "hsl(var(--blue-500))",
                    400: "hsl(var(--blue-400))",
                    300: "hsl(var(--blue-300))",
                    200: "hsl(var(--blue-200))",
                    150: "hsl(var(--blue-150))",
                    100: "hsl(var(--blue-100))",
                    50: "hsl(var(--blue-050))",
                    20: "hsl(var(--blue-020))",
                },
                purple: {
                    brand: "hsl(var(--purple-brand))",
                    900: "hsl(var(--purple-900))",
                    800: "hsl(var(--purple-800))",
                    750: "hsl(var(--purple-750))",
                    700: "hsl(var(--purple-700))",
                    600: "hsl(var(--purple-600))",
                    500: "hsl(var(--purple-500))",
                    400: "hsl(var(--purple-400))",
                    300: "hsl(var(--purple-300))",
                    200: "hsl(var(--purple-200))",
                    150: "hsl(var(--purple-150))",
                    100: "hsl(var(--purple-100))",
                    50: "hsl(var(--purple-050))",
                    20: "hsl(var(--purple-020))",
                },
                green: {
                    900: "hsl(var(--green-900))",
                    800: "hsl(var(--green-800))",
                    750: "hsl(var(--green-750))",
                    700: "hsl(var(--green-700))",
                    600: "hsl(var(--green-600))",
                    500: "hsl(var(--green-500))",
                    400: "hsl(var(--green-400))",
                    300: "hsl(var(--green-300))",
                    200: "hsl(var(--green-200))",
                    150: "hsl(var(--green-150))",
                    100: "hsl(var(--green-100))",
                    50: "hsl(var(--green-050))",
                    20: "hsl(var(--green-020))",
                },
            },
        },
        screens: {
            xs: "375px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },
    plugins: [],
} satisfies Config;
