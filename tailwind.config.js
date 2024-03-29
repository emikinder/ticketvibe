/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const { nextui } = require("@nextui-org/react");

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: { colors: { purple: "#6622CC" } },
    },
    darkMode: "class",
    plugins: [nextui()],
};
