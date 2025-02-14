import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "./components/landing/Landing";
import Nav from "./components/basic/Nav";

const App: React.FC = () => {
    return (
        <div className="bg-background">
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<Landing />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
