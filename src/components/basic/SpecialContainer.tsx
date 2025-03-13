import { useState, useRef, useCallback, MouseEvent, ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

const SpecialContainer = ({ children, className }: ContainerProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setOpacity(1);
    };

    const handleTilt = useCallback(
        throttle((e: MouseEvent<HTMLDivElement>) => {
            const box = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - box.left;
            const y = e.clientY - box.top;
            const rotateX = (y - box.height / 2) / 100;
            const rotateY = (box.width / 2 - x) / 500;

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
            className={`relative border border-content p-6 rounded-xl shadow-lg flex transition-transform duration-300 hover:scale-[1.02] overflow-hidden ${className}`}
            onMouseMove={(e) => {
                handleMouseMove(e);
                handleTilt(e);
            }}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
                transition: "transform 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s", // limit to transform
                willChange: "transform", // hint browser for smoother repaint
            }}
        >
            <div
                className="absolute inset-0 z-10 pointer-events-none rounded-xl border transition-opacity duration-500"
                style={{
                    border: "1px solid #6B7784",
                    opacity,
                    WebkitMaskImage: `radial-gradient(circle 100px at ${position.x}px ${position.y}px, black 50%, transparent 101%)`,
                    willChange: "opacity, webkitMaskImage", // optimize mask updates
                }}
            />
            <div className="relative z-10 w-full">{children}</div>
        </div>
    );
};

function throttle<T extends (...args: any[]) => any>(func: T, delay: number) {
    let lastCall = 0;
    return (...args: Parameters<T>) => {
        const now = new Date().getTime();
        if (now - lastCall < delay) return;
        lastCall = now;
        return func(...args);
    };
}

export default SpecialContainer;
