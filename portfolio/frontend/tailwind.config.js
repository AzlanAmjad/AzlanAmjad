// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                notoNastaliq: ["Noto Nastaliq Urdu", "serif"],
                cormorantGaramond: ["Cormorant Garamond", "serif"],
            },
            colors: {
                night: "#080F0F",
                lightBlue: "#008DD5",
                darkBlue: "#001050",
                red: "#A30000",
                darkRed: "#8C0000",
                yellow: "#FFDD4A",
                white: "#FBFFF1",
            },
            textShadow: {
                sm: "2px 2px 0 var(--tw-shadow-color, rgba(0, 0, 0, 1))",
                DEFAULT: "4px 4px 0 var(--tw-shadow-color, rgba(0, 0, 0, 1))",
                lg: "8px 8px 0 var(--tw-shadow-color, rgba(0, 0, 0, 1))",
                long: "2px 2px 0 var(--tw-shadow-color, rgba(0, 0, 0, 1)), 3px 3px 0 var(--tw-shadow-color, rgba(0, 0, 0, 1)), 4px 4px 0 var(--tw-shadow-color, rgba(0, 0, 0, 1)), 5px 5px 0 var(--tw-shadow-color, rgba(0, 0, 0, 1)), 6px 6px 0 var(--tw-shadow-color, rgba(0, 0, 0, 1)), 7px 7px 0 var(--tw-shadow-color, rgba(0, 0, 0, 1))",
            },
        },
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    "text-shadow": (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme("textShadow") }
            );
        }),
    ],
};
