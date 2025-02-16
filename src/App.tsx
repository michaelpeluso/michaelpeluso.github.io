import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "./components/landing/Landing";
import Nav from "./components/nav/Nav";
import { Study } from "./components/study/Study";

const App: React.FC = () => {
    return (
        <Router>
            <div className="absolute inset-0 h-full w-full bg-transparent bg-[radial-gradient(grey,transparent_1px)] [background-size:45px_45px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_0%,transparent_150%)]"></div>
            <Nav />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/study" element={<Study />} />
            </Routes>
        </Router>
    );
};

export default App;
