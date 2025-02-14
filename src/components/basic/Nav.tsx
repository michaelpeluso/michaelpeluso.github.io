import { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { ReaderIcon, CodeIcon, BackpackIcon, StackIcon, LinkedInLogoIcon, GitHubLogoIcon, HandIcon, EnvelopeOpenIcon, SunIcon, MoonIcon } from "@radix-ui/react-icons";

const pageItems = [
    { name: "Study", icon: <ReaderIcon />, path: "/study" },
    { name: "Work", icon: <CodeIcon />, path: "/work" },
    { name: "Career", icon: <BackpackIcon />, path: "/career" },
    { name: "Shelf", icon: <StackIcon />, path: "/shelf" },
];

const infoItems = [
    { name: "LinkedIn", icon: <LinkedInLogoIcon />, path: "https://www.linkedin.com/in/michaelpeluso5/" },
    { name: "Github", icon: <GitHubLogoIcon />, path: "https://github.com/michaelpeluso" },
    { name: "Handshake", icon: <HandIcon />, path: "https://njit.joinhandshake.com/profiles/bdzs5d" },
    { name: "Contact", icon: <EnvelopeOpenIcon />, path: "mailto:mfpel29@gmail.com" },
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
