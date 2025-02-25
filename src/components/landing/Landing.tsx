import React from "react";
import DynamicTerminal from "./DynamicTerminal";
import Hero from "./Hero";
import GroupedSkills from "./GroupedSkills";
import Separator from "../basic/Separator";
import Highlights from "./Highlights";
import Timeline from "./Timeline";

const Landing = () => {
    return (
        <>
            <div className="absolute pointer-events-none inset-0 w-full h-full bg-transparent bg-[radial-gradient(grey,transparent_1px)] [background-size:45px_45px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_0%,transparent_150%)]"></div>

            <div
                className="opacity-30 pointer-events-none w-[60%] sm:mt-10 self-end  
        text-xl md:text-4xl lg:text-5xl xl:text-6xl 
        blur-[2px] md:blur-[3px] lg:blur-[4px] absolute top-0 right-0"
            >
                <DynamicTerminal />
            </div>

            <Hero />

            {/* Image 
            <div className="flex items-center justify-center w-1/2 md:w-1/3 lg:w-1/5 m-auto rounded-xl">
                <img src={process.env.PUBLIC_URL + "/profile1.jpg"} alt="Profile Picture" className="w-full h-full object-cover rounded-lg" />{" "}
            </div>*/}

            <div className="hidden md:block">
                <Separator />
            </div>

            <Highlights />

            <Separator />

            <GroupedSkills />

            <Separator />

            <Timeline />
        </>
    );
};

export default Landing;
