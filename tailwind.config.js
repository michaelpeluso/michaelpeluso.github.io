/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/components/landing/HeroList.tsx"],
    theme: {
        extend: {
            colors: {
                primary: "#d7a150",
                secondary: "#283271",
                background: "#ffffff",
                text: "#333333",
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
                ubuntu: ["Ubuntu", "serif"],
            },
        },
    },
    plugins: [],
};
