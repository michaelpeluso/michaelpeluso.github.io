import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export const Button = ({ title, link }: { title: string; link: string }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });

        setOpacity(1); // Keep effect visible while moving
    };

    const handleMouseLeave = () => setOpacity(0);

    return (
        <div
            className="relative w-56"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave} // Effect stays while near button
        >
            <Link to={link} className="underline underline-offset-4 sm:no-underline">
                <button ref={buttonRef} className="backdrop-blur-md h-12 w-full cursor-pointer rounded-lg bg-content duration-300 focus:border-secondary focus:outline-none hover:bg-shadow">
                    {title}
                </button>
            </Link>
            <button
                disabled
                style={{
                    border: "1px solid #6b7784",
                    opacity,
                    WebkitMaskImage: `radial-gradient(circle 50px at ${position.x}px ${position.y}px, black 50%, transparent 101%)`,
                }}
                aria-hidden="true"
                className="pointer-events-none rounded-lg absolute left-0 z-10 h-12 w-full cursor-default border bg-transparent opacity-0 transition-opacity duration-500"
            />
        </div>
    );
};
