import { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import Footer from "./Footer";
import MobileNav from "./MobileNav";

import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { SiGithub, SiHandshake } from "react-icons/si";
import { FaEnvelope, FaFileAlt } from "react-icons/fa";

const pageItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Career", path: "/career" },
];

const infoItems = [
    { name: "LinkedIn", icon: <LinkedInLogoIcon className="w-4 h-4 lg:w-5 lg:h-5" />, path: "https://www.linkedin.com/in/michaelpeluso5/" },
    { name: "Github", icon: <SiGithub />, path: "https://github.com/michaelpeluso" },
    { name: "Handshake", icon: <SiHandshake />, path: "https://njit.joinhandshake.com/profiles/bdzs5d" },
    { name: "Contact", icon: <FaEnvelope />, path: "mailto:mfpel29@gmail.com" },
    { name: "Resume", icon: <FaFileAlt />, path: "/Michael_Peluso_Resume.pdf" },
];

const Nav = () => {
    const [isLightMode, setIsLightMode] = useState(false);

    // Toggle theme function
    const toggleTheme = () => {
        setIsLightMode(!isLightMode);
        document.body.classList.toggle("light-mode", !isLightMode);
    };

    // Sync with localStorage on load
    useEffect(() => {
        if (localStorage.getItem("theme") === "light") {
            setIsLightMode(true);
            document.body.classList.add("light-mode");
        } else {
            setIsLightMode(false);
            document.body.classList.remove("light-mode");
        }
    }, []);

    // Save the theme preference to localStorage
    useEffect(() => {
        if (isLightMode) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.removeItem("theme");
        }
    }, [isLightMode]);

    return (
        <>
            <div className="hidden md:block">
                <DesktopNav pageItems={pageItems} infoItems={infoItems} isLightMode={isLightMode} toggleTheme={toggleTheme} />
            </div>
            <div className="block md:hidden">
                <MobileNav pageItems={pageItems} infoItems={infoItems} isLightMode={isLightMode} toggleTheme={toggleTheme} />
            </div>

            <Footer pageItems={pageItems} infoItems={infoItems} />
        </>
    );
};

export default Nav;
