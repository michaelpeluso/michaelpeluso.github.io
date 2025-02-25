import { useState, ReactElement, useRef, useCallback, MouseEvent } from "react";
import { Button } from "../basic/Button";
import { TagIcon } from "../basic/TagIcon";
import { url } from "inspector";

interface ItemProps {
    title: string;
    date: string;
    description: string;
    tags: string[];
    link: string;
    image?: string | null;
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

export const PinnedItem = ({ title, date, description, tags, link, image }: ItemProps) => {
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
            const rotateX = (y - centerY) / 100;
            const rotateY = (centerX - x) / 500;

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
            className="relative border border-content p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-4 transition-transform duration-300 hover:scale-[1.02] overflow-hidden"
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

            {/* Left Content */}
            <div className="relative z-10 sm:w-[50%]">
                <h2 className="theme-subtitle">{title}</h2>
                <p className="theme-body pt-2">
                    {description}
                    <span className="theme-muted xs:text-xl md:text-base italic pl-3 md:pl-5">{date}</span>
                </p>

                {/* Tags Section */}
                <div className="flex flex-wrap pt-2 gap-2 md:gap-3 my-2">
                    {tags.map((name, i) => (
                        <TagIcon key={i} iconName={name} />
                    ))}
                </div>

                {/* Button */}
                <div className="mt-auto gap-3 pt-3">
                    <Button link={link} title="View Code" />
                </div>
            </div>

            {/* Image */}
            {image && (
                <div className="hidden md:block absolute left-[55%] top-[-10%] w-[60%] h-[30rem] pointer-events-none">
                    <img src={image} alt="Project Image" className="w-full h-full object-cover object-left-top rotate-12 opacity-80" />
                </div>
            )}
        </div>
    );
};
