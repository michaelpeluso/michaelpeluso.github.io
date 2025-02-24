import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Career from "./components/career/Career";
import Projects from "./components/projects/Projects";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/career" element={<Career />} />
                <Route path="/Projects" element={<Projects />} />
            </Routes>
            <Nav />
        </Router>
    );
};

export default App;
