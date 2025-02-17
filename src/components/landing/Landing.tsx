import React from "react";
import DynamicTerminal from "./DynamicTerminal";
import Hero from "./Hero";

export const Landing = () => {
    return (
        <div className="relative min-h-screen flex flex-col justify-between">
            <div className="absolute pointer-events-none inset-0 w-full h-full bg-transparent bg-[radial-gradient(grey,transparent_1px)] [background-size:45px_45px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_0%,transparent_150%)]"></div>

            <div
                className="opacity-40 pointer-events-none w-[60%] sm:mt-10 self-end  
                text-xl md:text-4xl lg:text-5xl xl:text-6xl 
                blur-[2px] md:blur-[3px] lg:blur-[5px]"
            >
                <DynamicTerminal />
            </div>

            <div className="w-full p-10">
                <Hero />
            </div>
        </div>
    );
};
