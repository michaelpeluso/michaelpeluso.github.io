import React, { useEffect, useState, useRef, useMemo } from "react";

const randomChar = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789,./;'[]!@#$%^&*()-=_+{}:<>?";
    return chars[Math.floor(Math.random() * chars.length)];
};

const getRandomColor = () => (Math.random() > 0.5 ? "text-primary" : "text-accent");

interface AnimatedTitleProps {
    start?: string;
    end: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ start = "", end }) => {
    // Pad the strings so they have equal length.
    let paddedStart: string;
    let paddedEnd: string;
    if (start) {
        if (start.length < end.length) {
            paddedStart = start + " ".repeat(end.length - start.length);
            paddedEnd = end;
        } else if (start.length > end.length) {
            paddedStart = start;
            paddedEnd = end + " ".repeat(start.length - end.length);
        } else {
            paddedStart = start;
            paddedEnd = end;
        }
    } else {
        // Generate a random string (keeping spaces) matching end's length.
        paddedStart = end
            .split("")
            .map((ch) => (ch === " " ? " " : randomChar()))
            .join("");
        paddedEnd = end;
    }

    // Compute initial displayed state (flat array per character)
    const [displayedTitle, setDisplayedTitle] = useState(
        paddedStart.split("").map((char) => ({
            char,
            className: "text-subtitle",
            isAnimating: false,
        }))
    );
    const [hasAnimated, setHasAnimated] = useState(false);
    const titleRef = useRef<HTMLHeadingElement>(null);

    // Compute word grouping based on paddedEnd so that grouping is stable.
    const groupIndices = useMemo(() => {
        const groups: number[][] = [];
        let currentGroup: number[] = [];
        for (let i = 0; i < paddedEnd.length; i++) {
            // Include the character in the current group.
            currentGroup.push(i);
            // If this character is a space, end the group.
            if (paddedEnd[i] === " ") {
                groups.push(currentGroup);
                currentGroup = [];
            }
        }
        if (currentGroup.length > 0) groups.push(currentGroup);
        return groups;
    }, [paddedEnd]);

    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.9 && !hasAnimated) {
                    animateGlitch(paddedStart, paddedEnd);
                    setHasAnimated(true);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            threshold: 0.9,
        });

        if (titleRef.current) observer.observe(titleRef.current);

        return () => {
            if (titleRef.current) observer.unobserve(titleRef.current);
        };
    }, [paddedStart, paddedEnd, hasAnimated]);

    const animateGlitch = (from: string, to: string) => {
        const fromChars = from.split("");
        const toChars = to.split("");

        let tempTitle = fromChars.map((char) => ({
            char,
            className: "text-subtitle",
            isAnimating: true,
        }));

        const finalTitle = toChars.map((char) => ({
            char,
            className: "text-subtitle",
            isAnimating: false,
        }));

        let steps = fromChars.map(() => Math.floor(Math.random() * 20) + 4);
        let delays = fromChars.map(() => Math.floor(Math.random() * 100));

        const interval = setInterval(() => {
            const updatedTitle = tempTitle.map((item, index) => {
                if (steps[index] > 0 && delays[index] <= 0) {
                    return {
                        char: Math.random() > 0.5 ? randomChar() : item.char,
                        className: getRandomColor(),
                        isAnimating: true,
                    };
                } else if (steps[index] > 0) {
                    delays[index] -= 10;
                    return item;
                } else {
                    // When finished, use the final character.
                    return {
                        char: finalTitle[index].char,
                        className: "text-subtitle",
                        isAnimating: false,
                    };
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
        <h2
            ref={titleRef}
            style={{
                fontFamily: "'Source Code Pro', sans-serif",
                display: "flex",
                flexWrap: "wrap",
            }}
        >
            {groupIndices.map((group, groupIndex) => (
                <div key={groupIndex} style={{ display: "inline-flex", flexShrink: 0 }}>
                    {group.map((index) => (
                        <span key={index} className={displayedTitle[index]?.className} style={{ display: "inline-block", width: "1ch", textAlign: "center" }}>
                            {displayedTitle[index]?.char}
                        </span>
                    ))}
                </div>
            ))}
        </h2>
    );
};

export default AnimatedTitle;
