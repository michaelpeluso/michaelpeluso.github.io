import { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { SiGithub, SiHandshake, SiMaildotru } from "react-icons/si";

const pageItems = [
    { name: "Study", path: "/study" },
    { name: "Work", path: "/work" },
    { name: "Career", path: "/career" },
    { name: "Shelf", path: "/shelf" },
];

const infoItems = [
    { name: "LinkedIn", icon: <LinkedInLogoIcon />, path: "https://www.linkedin.com/in/michaelpeluso5/" },
    { name: "Github", icon: <SiGithub />, path: "https://github.com/michaelpeluso" },
    { name: "Handshake", icon: <SiHandshake />, path: "https://njit.joinhandshake.com/profiles/bdzs5d" },
    { name: "Contact", icon: <SiMaildotru />, path: "mailto:mfpel29@gmail.com" },
];

const Nav: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return <>{isMobile ? <MobileNav pageItems={pageItems} infoItems={infoItems} /> : <DesktopNav pageItems={pageItems} infoItems={infoItems} />}</>;
};

export default Nav;
