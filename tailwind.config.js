/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/components/landing/HeroList.tsx"],
    theme: {
        extend: {
            colors: {
                white: "#ffffff",
                primary: "#403f4c",
                secondary: "#1b2432",
                background: "#121420",
                text: "#333333",
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
                ubuntu: ["Ubuntu", "serif"],
                title: ["Manrope", "sans-serif"],
                subtitle: ["Poppins", "sans-serif"],
                body: ["Inter", "sans-serif"],
                code: ["Source Code Pro", "sans-serif"],
            },
            fontWeight: {
                title: "600", // thick
                subtitle: "200", // regular
                body: "100", // thin
                code: "300", // light
            },
            animation: {
                ["infinite-slider"]: "infiniteSlider 20s linear infinite",
            },
            keyframes: {
                infiniteSlider: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(calc(-250px * 5))" },
                },
            },
        },
    },
    plugins: [],
};
