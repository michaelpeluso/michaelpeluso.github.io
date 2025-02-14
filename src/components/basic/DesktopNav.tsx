import { Link } from "react-router-dom";
import { useState } from "react";
import { HomeIcon } from "@radix-ui/react-icons";

const DesktopNav = ({ pageItems, infoItems }: { pageItems: any[]; infoItems: any[] }) => {
    return (
        <nav className="fixed top-0 left-0 w-full h-full">
            {/* horizontal line */}
            <div className="absolute top-[50px] left-0 w-full h-[1px] bg-white/30"></div>

            {/* vertical line */}
            <div className="absolute top-0 left-[50px] h-full w-[1px] bg-white/30"></div>

            {/* home */}
            <Link to="/" className="absolute top-[10px] left-[10px] text-white">
                <HomeIcon width={24} height={24} />
            </Link>

            {/* socials */}
            <div className="absolute top-[60px] left-0 w-[50px] h-[calc(100vh-60px)] flex flex-col items-center gap-6 p-4">
                {infoItems.map(({ name, icon, path }) => (
                    <a key={name} href={path} target="_blank" rel="noopener noreferrer" className="text-white opacity-100 hover:opacity-60 transition-opacity duration-300">
                        {icon}
                    </a>
                ))}
            </div>

            {/* pages */}
            <ul className="absolute top-0 right-10 h-[50px] flex gap-10 items-center">
                {pageItems.map(({ name, icon, path }) => (
                    <li key={name} className="flex items-center gap-2 text-white hover:cursor-pointer opacity-100 hover:opacity-60 transition-opacity duration-300">
                        {icon}
                        <Link to={path}>{name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default DesktopNav;
