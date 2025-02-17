import React from "react";
import CodeBlock from "./CodeBlock";
import AnimatedTitle from "./AnimatedTitle";

export interface PageItem {
    type: "title" | "subtitle" | "body" | "muted" | "code" | "line-break";
    text?: React.ReactNode; // Allows JSX elements
    snippet?: string;
    code?: string;
    language?: string;
}

export const PageBuilder: React.FC<{ items: PageItem[] }> = ({ items }) => {
    const structuredContent: any[] = [];
    let currentTitle: any = null;
    let currentSubtitle: any = null;

    items.forEach((item) => {
        switch (item.type) {
            case "title":
                currentTitle = { ...item, children: [] };
                structuredContent.push(currentTitle);
                currentSubtitle = null;
                break;
            case "subtitle":
                if (currentTitle) {
                    currentSubtitle = { ...item, children: [] };
                    currentTitle.children.push(currentSubtitle);
                }
                break;
            case "body":
                if (currentSubtitle) {
                    currentSubtitle.children.push(item);
                }
                break;
        }
    });

    return (
        <div className="max-w-4xl mx-auto p-10">
            {structuredContent.map((titleItem, titleIndex) => (
                <div key={titleIndex} className="pt-10 pb-20">
                    {/* Title */}
                    <h1 className="theme-title">{titleItem.text}</h1>
                    {titleItem.children.map((subtitleItem: any, subtitleIndex: number) => (
                        <div key={subtitleIndex} className="relative flex flex-col gap-4 pt-6 my-10">
                            {/* Subtitle  */}
                            <div className="flex flex-col pl-6">
                                <h2 className="theme-subtitle">
                                    <AnimatedTitle start=" " end={subtitleItem.text} />
                                </h2>
                                {subtitleItem.snippet && <span className="theme-muted">{subtitleItem.snippet}</span>}
                            </div>

                            {/*  Line */}
                            <div className="absolute left-[5px] top-[1.5rem] bottom-0 w-[2px] bg-primary"></div>

                            {/* Body */}
                            <div className="pl-6">
                                {subtitleItem.children.map((child: any, childIndex: number) => {
                                    if (child.type === "body") {
                                        return (
                                            <p key={childIndex} className="theme-body">
                                                {child.text}
                                            </p>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
