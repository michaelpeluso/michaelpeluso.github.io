/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "#0f1014", // Dark but not harsh black
                surface: "#1B1E23", // Slightly lighter for cards, modals
                primary: "#53b086", // main highlight
                accent: "#54D6BE", // highlight color
                title: "#9BA8B5", // Light pastel blue for headings
                subtitle: "#6B7784", // Muted blue-gray for subheadings
                body: "#D0D3D7", // Soft off-white for reading
                muted: "#868D95", // Less important info
                button: {
                    DEFAULT: "#2C353D", // Default button background
                    hover: "#54D6BE", // Glow effect on hover
                    border: "#6B7784", // Subtle contrast for outlines
                },
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
