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
                subtitle: "#bac4cf", // Muted blue-gray for subheadings
                body: "#D0D3D7", // Soft off-white for reading
                muted: "#868D95", // Less important info

                // light mode palette
                "background-light": "#edf1f7", // Almost white, soft background
                "content-light": "#949ca6", // Crisp white for content
                "shine-light": "#8F99A9", // Light grayish-blue for subtle highlights
                "shadow-light": "#BCC7D1", // Very light gray for soft shadows
                "title-light": "#2F3D47", // Dark slate blue for headings
                "subtitle-light": "#4E5D6B", // Muted steel blue for subheadings
                "body-light": "#293138", // Muted grayish-blue for body text
                "muted-light": "#3d4954", // Light grayish for less important text
            },
        },
    },
    plugins: [],
};
