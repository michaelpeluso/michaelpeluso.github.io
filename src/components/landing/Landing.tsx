import React from "react";
import HoverList from "./HoverList";
import DynamicTerminal from "./DynamicTerminal";

export const Landing = () => {
    return (
        <>
            <HoverList />
            <div className="absolute">
                <DynamicTerminal />
            </div>
        </>
    );
};
