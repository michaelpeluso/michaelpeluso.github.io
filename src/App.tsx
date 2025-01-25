import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "./components/landing/Landing";

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <h1>Welcome to my portfolio</h1>
            </div>
            <Routes>
                <Route path="/" element={<Landing />} />
            </Routes>
        </Router>
    );
};

export default App;
