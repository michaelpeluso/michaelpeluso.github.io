import React, { useEffect, useState, useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";

export interface PageItem {
    type: "title" | "subtitle" | "body" | "muted" | "code" | "line-break";
    text?: React.ReactNode;
    snippet?: string;
    code?: string;
    language?: string;
}

interface Section {
    title: React.ReactNode;
    bodies: React.ReactNode[];
    subsections: SubSection[];
}

interface SubSection {
    subtitle: React.ReactNode;
    snippet?: string;
    bodies: React.ReactNode[];
}

export const PageBuilder: React.FC<{ items: PageItem[] }> = ({ items }) => {
    const sections: Section[] = [];
    let currentSection: Section | null = null;
    let currentSubsection: SubSection | null = null;

    items.forEach((item) => {
        switch (item.type) {
            case "title":
                currentSection = { title: item.text, bodies: [], subsections: [] };
                sections.push(currentSection);
                currentSubsection = null;
                break;
            case "subtitle":
                if (!currentSection) {
                    currentSection = { title: null, bodies: [], subsections: [] };
                    sections.push(currentSection);
                }
                currentSubsection = {
                    subtitle: item.text,
                    snippet: item.snippet,
                    bodies: [],
                };
                currentSection.subsections.push(currentSubsection);
                break;
            case "body":
                if (!currentSection) {
                    currentSection = { title: null, bodies: [], subsections: [] };
                    sections.push(currentSection);
                }
                if (currentSubsection) {
                    currentSubsection.bodies.push(item.text);
                } else {
                    currentSection.bodies.push(item.text);
                }
                break;
            default:
                break;
        }
    });

    return (
        <div className="max-w-5xl mx-auto p-12 md:p-10">
            {sections.map((section, index) => (
                <div key={index} className="pt-10" id={typeof section.title === "string" ? section.title.replace(/\s+/g, "").toLowerCase() : `section-${index}`}>
                    {section.title && <h1 className="theme-title">{section.title}</h1>}
                    {section.bodies.map((body, i) => (
                        <p key={i} className="theme-body">
                            {body}
                        </p>
                    ))}

                    {section.subsections.map((subsection, i) => (
                        <SubtitleSection key={i} subtitleItem={subsection} />
                    ))}
                </div>
            ))}
        </div>
    );
};

interface SubtitleSectionProps {
    subtitleItem: SubSection;
}

const SubtitleSection: React.FC<SubtitleSectionProps> = ({ subtitleItem }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // When any part of the element is in the middle 80% of the viewport, trigger animation.
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            {
                root: null,
                threshold: 0,
                rootMargin: "-10% 0px -10% 0px",
            }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <div ref={sectionRef} className="relative flex flex-col gap-4 my-20" id={typeof subtitleItem.subtitle === "string" ? subtitleItem.subtitle.replace(/\s+/g, "").toLowerCase() : ""}>
            {/* Subtitle */}
            <div className="flex flex-col pl-6">
                <h2 className="theme-subtitle ">
                    <AnimatedTitle end={typeof subtitleItem.subtitle === "string" ? subtitleItem.subtitle : ""} />
                </h2>
                {subtitleItem.snippet && <span className="text-muted italic">{subtitleItem.snippet}</span>}
            </div>

            {/* Animated Vertical Line */}
            <div className={`absolute left-[5px] top-0 w-[2px] bg-primary transition-[height] duration-1000 delay-200 ease-out ${isVisible ? "h-full" : "h-0"}`}></div>

            {/* Body Content for this subsection */}
            <div className="pl-6">
                {subtitleItem.bodies.map((body, i) => (
                    <p key={i} className={`theme-body transition-opacity duration-200 ${isVisible ? "opacity-100" : "opacity-50"}`}>
                        {body}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default PageBuilder;
