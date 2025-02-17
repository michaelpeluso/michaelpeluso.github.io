import React, { useEffect, useState, useRef } from "react";

const randomChar = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789,./;'[]!@#$%^&*()-=_+{}:<>?";
    return chars[Math.floor(Math.random() * chars.length)];
};

const getRandomColor = () => (Math.random() > 0.5 ? "text-primary" : "text-accent");

interface AnimatedTitleProps {
    start: string;
    end: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ start, end }) => {
    const [displayedTitle, setDisplayedTitle] = useState(start.split("").map((char) => ({ char, className: "text-white" })));
    const [hasAnimated, setHasAnimated] = useState(false);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.9 && !hasAnimated) {
                    animateGlitch(start, end);
                    setHasAnimated(true); // Prevent re-triggering
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null, // Observes in relation to the viewport
            threshold: 0.9, // Triggers when 90% of the component is visible
        });

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
        };
    }, [start, end, hasAnimated]);

    const animateGlitch = (from: string, to: string) => {
        const maxLength = Math.max(from.length, to.length);
        let tempTitle = from
            .padEnd(maxLength, " ")
            .split("")
            .map((char) => ({
                char,
                className: "text-white",
                isAnimating: true,
            }));
        let finalTitle = to
            .padEnd(maxLength, " ")
            .split("")
            .map((char) => ({
                char,
                className: "text-white",
                isAnimating: false,
            }));

        let steps = Array.from({ length: maxLength }, () => Math.floor(Math.random() * 20) + 4);
        let delays = Array.from({ length: maxLength }, () => Math.floor(Math.random() * 100)); // Random start delays

        const interval = setInterval(() => {
            let updatedTitle = tempTitle.map((item, i) => {
                if (steps[i] > 0 && delays[i] <= 0) {
                    return {
                        char: Math.random() > 0.5 ? randomChar() : item.char,
                        className: getRandomColor(),
                        isAnimating: true,
                    };
                } else if (steps[i] > 0) {
                    delays[i] -= 10; // Reduce delay
                    return item;
                } else {
                    return { char: finalTitle[i].char, className: "text-white", isAnimating: false };
                }
            });

            setDisplayedTitle(updatedTitle);
            steps = steps.map((step) => Math.max(0, step - 1));

            if (steps.every((step) => step === 0)) {
                clearInterval(interval);
                setDisplayedTitle(finalTitle);
            }
        }, 50);
    };

    return (
        <h2 ref={titleRef} style={{ fontFamily: "'Source Code Pro', sans-serif" }}>
            {displayedTitle.map((item, i) => (
                <span key={i} className={item.className} style={{ display: "inline-block", width: "1ch" }}>
                    {item.char}
                </span>
            ))}
        </h2>
    );
};

export default AnimatedTitle;
