import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#059669",
                },
                secondary: {
                    DEFAULT: "#f59e0b",
                },
                background: "#ffffff",
                alternative: "#f8fafc",
                footer: "#022c22",
            },
        },
    },
    plugins: [],
};
export default config;
