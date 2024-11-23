import type { Config } from "tailwindcss";

// TODO: finalise the colours for the tailwind config
const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "wdcc-gray": "#4f4f4f",
                "wdcc-orange": "#fb8500",
                "wdcc-yellow": "#ffd166",
                "wdcc-blue": {
                    500: "#1a68ef",
                    600: "#3a86ff",
                },
                "wdcc-navy": "#03045e",
                "wdcc-indigo": "#7209b7",
            },
        },
    },
    plugins: [],
};
export default config;
