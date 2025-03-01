import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Career from "./components/career/Career";
import Portfolio from "./components/portfolio/Portfolio";

function ScrollHandler() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash.replace("#", ""));
                if (element) {
                    element.scrollIntoView({ behavior: "auto", block: "start" });
                }
            }, 0);
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
}

const App: React.FC = () => {
    return (
        <Router>
            <ScrollHandler />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/career" element={<Career />} />
            </Routes>
            <Nav />
        </Router>
    );
};

export default App;
