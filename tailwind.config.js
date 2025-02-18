/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "#0F1014", // Dark but not harsh black

                content: "#1B1E23", // subtle card/modal color
                shine: "#6B7784", // Reused for subtle highlights and subtitles
                shadow: "#15171C", // Keeps depth without being too harsh

                primary: "#4A9B78", // Slightly darker for a more balanced contrast
                accent: "#4AC3AD", // Less neon, more natural

                title: "#9BA8B5", // Light pastel blue for headings
                subtitle: "#6B7784", // Muted blue-gray for subheadings
                body: "#D0D3D7", // Soft off-white for reading
                muted: "#868D95", // Less important info
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
