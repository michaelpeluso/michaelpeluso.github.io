import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { SiGithub, SiHandshake, SiMaildotru } from "react-icons/si";

import { Landing } from "./components/landing/Landing";
import Nav from "./components/nav/Nav";
import { Career } from "./components/career/Career";
import Footer from "./components/nav/Footer";
import Projects from "./components/projects/Projects";

const pageItems = [
    { name: "About", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Career", path: "/career" },
    { name: "Shelf", path: "/shelf" },
];

const infoItems = [
    { name: "LinkedIn", icon: <LinkedInLogoIcon />, path: "https://www.linkedin.com/in/michaelpeluso5/" },
    { name: "Github", icon: <SiGithub />, path: "https://github.com/michaelpeluso" },
    { name: "Handshake", icon: <SiHandshake />, path: "https://njit.joinhandshake.com/profiles/bdzs5d" },
    { name: "Contact", icon: <SiMaildotru />, path: "mailto:mfpel29@gmail.com" },
];

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/career" element={<Career />} />
                <Route path="/Projects" element={<Projects />} />
            </Routes>
            <Nav pageItems={pageItems} infoItems={infoItems} />
            <Footer pageItems={pageItems} infoItems={infoItems} />
        </Router>
    );
};

export default App;
