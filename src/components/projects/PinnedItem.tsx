import { useState, ReactElement, useRef, useCallback, MouseEvent } from "react";
import { Button } from "../basic/Button";
import { TagIcon } from "../basic/TagIcon";

interface ItemProps {
    title: string;
    date: string;
    description: string;
    tags: string[];
    link: string;
}

// Throttle function to improve performance
function throttle<T extends (...args: any[]) => any>(func: T, delay: number) {
    let lastCall = 0;
    return (...args: Parameters<T>) => {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

export const PinnedItem = ({ title, date, description, tags, link }: ItemProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    // Handle mouse move for border effect
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });

        setOpacity(1);
    };

    // Tilt effect for 3D transformation
    const handleTilt = useCallback(
        throttle((e: MouseEvent<HTMLDivElement>) => {
            const card = e.currentTarget;
            const box = card.getBoundingClientRect();
            const x = e.clientX - box.left;
            const y = e.clientY - box.top;
            const centerX = box.width / 2;
            const centerY = box.height / 2;
            const rotateX = (y - centerY) / 50;
            const rotateY = (centerX - x) / 75;

            setRotate({ x: rotateX, y: rotateY });
        }, 50),
        []
    );

    const handleMouseLeave = () => {
        setOpacity(0);
        setRotate({ x: 0, y: 0 });
    };

    return (
        <div
            ref={containerRef}
            className="relative bg-content p-6 rounded-lg shadow-lg flex flex-col gap-2 md:gap-4 transition-transform duration-300 hover:scale-[1.02]"
            onMouseMove={(e) => {
                handleMouseMove(e);
                handleTilt(e);
            }}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
                transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
            }}
        >
            {/* Hover Border Effect */}
            <div
                className="absolute inset-0 z-10 pointer-events-none rounded-xl border transition-opacity duration-500"
                style={{
                    border: "1px solid #6B7784",
                    opacity,
                    WebkitMaskImage: `radial-gradient(circle 100px at ${position.x}px ${position.y}px, black 50%, transparent 101%)`,
                }}
            />

            <div>
                <h2 className="theme-subtitle">{title}</h2>
                <p className="theme-muted">{date}</p>
            </div>
            <p className="theme-body">{description}</p>

            {/* Tags Section */}
            <div className="flex flex-wrap gap-2 md:gap-3 my-2">
                {tags.map((name, i) => (
                    <TagIcon key={i} iconName={name} />
                ))}
            </div>

            {/* Button */}
            <div className="mt-auto flex items-center justify-center gap-3">
                <Button link={link} title="View Code" />
            </div>
        </div>
    );
};
