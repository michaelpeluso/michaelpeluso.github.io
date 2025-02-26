import React, { useState } from "react";
import { FaJava } from "react-icons/fa";
import { TbHexagonLetterKFilled, TbBrandCSharp } from "react-icons/tb";
import {
    // Programming & Development
    SiJavascript,
    SiPython,
    SiC,
    SiCplusplus,
    SiR,
    SiPhp,
    SiNodedotjs,
    SiReact,
    // AI & Data Science
    SiOpenai,
    SiLangchain,
    // Tools & Platforms
    SiGooglecloud,
    SiAmazonwebservices,
    SiDocker,
    SiVirtualbox,
    SiRabbitmq,
    SiGit,
    SiLinux,
    // Database Management
    SiPostman,
    SiMongodb,
    SiMysql,
    SiOracle,
    SiPostgresql,
    SiPhpmyadmin,
    // Additional
    SiHtml5,
    SiCss3,
    SiBootstrap,
    SiTailwindcss,
    SiFlask,
    SiSqlite,
    SiNumpy,
    SiPandas,
    SiWordpress,
    SiApache,
    SiVmware,
    SiExpress,
    SiTypescript,
} from "react-icons/si";

interface TagIconProps {
    iconName: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const iconsMap: Record<string, React.FC<{ className?: string }>> = {
    // Programming & Development
    JavaScript: SiJavascript,
    Python: SiPython,
    Java: FaJava,
    C: SiC,
    Cpp: SiCplusplus,
    CSharp: TbBrandCSharp,
    R: SiR,
    PHP: SiPhp,
    Node: SiNodedotjs,
    React: SiReact,
    // AI & Data Science
    OpenAI: SiOpenai,
    Langchain: SiLangchain,
    // Tools & Platforms
    GoogleCloud: SiGooglecloud,
    AWS: SiAmazonwebservices,
    Docker: SiDocker,
    VirtualBox: SiVirtualbox,
    RabbitMQ: SiRabbitmq,
    Git: SiGit,
    Linux: SiLinux,
    Postman: SiPostman,
    // Database Management
    MongoDB: SiMongodb,
    MySQL: SiMysql,
    OracleSQL: SiOracle,
    Postgres: SiPostgresql,
    phpMyAdmin: SiPhpmyadmin,
    // Additional
    HTML: SiHtml5,
    CSS: SiCss3,
    Bootstrap: SiBootstrap,
    Tailwind: SiTailwindcss,
    Flask: SiFlask,
    Sqlite: SiSqlite,
    Numpy: SiNumpy,
    Pandas: SiPandas,
    Kaseya: TbHexagonLetterKFilled,
    WordPress: SiWordpress,
    Apache: SiApache,
    VMware: SiVmware,
    Express: SiExpress,
    TypeScript: SiTypescript,
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
                className={`absolute left-1/2 -translate-x-1/2 bg-shadow text-body text-xs px-2 py-1 rounded-md shadow-md transition-all duration-200 ease-out pointer-events-none ${
                    showTooltip ? "opacity-100 scale-100 -top-8" : "opacity-0 scale-90  -top-7"
                }`}
            >
                {iconName}
            </div>
        </div>
    );
};
