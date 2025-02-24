import DesktopNav from "./DesktopNav";
import Footer from "./Footer";
import MobileNav from "./MobileNav";

import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { SiGithub, SiHandshake, SiMaildotru } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";

const pageItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Career", path: "/career" },
    { name: "Shelf", path: "/shelf" },
];

const infoItems = [
    { name: "LinkedIn", icon: <LinkedInLogoIcon />, path: "https://www.linkedin.com/in/michaelpeluso5/" },
    { name: "Github", icon: <SiGithub />, path: "https://github.com/michaelpeluso" },
    { name: "Handshake", icon: <SiHandshake />, path: "https://njit.joinhandshake.com/profiles/bdzs5d" },
    { name: "Contact", icon: <FaEnvelope />, path: "mailto:mfpel29@gmail.com" },
];

const Nav = () => {
    return (
        <>
            <div className="hidden md:block">
                <DesktopNav pageItems={pageItems} infoItems={infoItems} />
            </div>
            <div className="block md:hidden">
                <MobileNav pageItems={pageItems} infoItems={infoItems} />
            </div>

            <Footer pageItems={pageItems} infoItems={infoItems} />
        </>
    );
};

export default Nav;
