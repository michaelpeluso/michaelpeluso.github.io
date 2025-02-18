import React, { useState } from "react";
import { SiC, SiR, SiJavascript, SiPython, SiOpengl, SiJupyter, SiHtml5, SiBootstrap, SiMysql, SiFlask, SiSqlite, SiOpenai, SiLangchain } from "react-icons/si";
import { FaDatabase, FaJava } from "react-icons/fa";

interface TagIconProps {
    iconName: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const iconsMap: Record<string, React.FC<{ className?: string }>> = {
    C: SiC,
    R: SiR,
    Java: FaJava,
    Javascript: SiJavascript,
    Python: SiPython,
    Opengl: SiOpengl,
    Jupyter: SiJupyter,
    Html5: SiHtml5,
    Bootstrap: SiBootstrap,
    Mysql: SiMysql,
    Flask: SiFlask,
    Sqlite: SiSqlite,
    Openai: SiOpenai,
    Langchain: SiLangchain,
    Databases: FaDatabase,
};

export const TagIcon: React.FC<TagIconProps> = ({ iconName, onClick, className = "" }: { iconName: string; onClick?: React.MouseEventHandler<HTMLDivElement>; className?: string }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const IconComponent = iconsMap[iconName];

    if (!IconComponent) return null; // Prevent rendering if the icon doesn't exist

    return (
        <div className={`relative flex items-center justify-center p-2 rounded-lg bg-shadow transition-all cursor-pointer ${className || ""}`} onClick={onClick} onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
            {/* Render the icon */}
            <IconComponent className={`w-4 h-4 md:w-5 md:h-5 ${className}`} />
            <div
                className={`absolute left-1/2 -translate-x-1/2 bg-shadow text-white text-xs px-2 py-1 rounded-md shadow-md transition-all duration-200 ease-out pointer-events-none ${
                    showTooltip ? "opacity-100 scale-100 -top-8" : "opacity-0 scale-90  -top-7"
                }`}
            >
                {iconName}
            </div>
        </div>
    );
};
