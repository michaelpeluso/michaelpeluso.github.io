import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Career from "./components/career/Career";
import Portfolio from "./components/portfolio/Portfolio";

function ScrollToElement() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace("#", ""));
            if (element) {
                element.scrollIntoView({ behavior: "auto", block: "start" });
            }
        }
    }, [hash]);

    return null;
}

const App: React.FC = () => {
    return (
        <Router>
            <ScrollToElement />
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
