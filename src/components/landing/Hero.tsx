import React, { useState, useEffect } from "react";
import AnimatedTitle from "../basic/AnimatedTitle";

const titles = ["Software Engineering", "Computer Science", "Information Technology", "Website Development", "Machine Learning", "Data Science", "Artificial Intelligence", "Cloud Computing", "DevOps & Systems Architecture"];

const Hero = () => {
    const [currentTitle, setCurrentTitle] = useState(titles[0]);
    const [nextTitle, setNextTitle] = useState(titles[1]);
    const [index, setIndex] = useState(0);
    const [animationKey, setAnimationKey] = useState(0);
    const [isFirstLoad, setIsFirstLoad] = useState(true); // Track first animation

    useEffect(() => {
        const interval = setInterval(() => {
            const newIndex = (index + 1) % titles.length;

            if (isFirstLoad) {
                setIsFirstLoad(false);
            } else {
                setCurrentTitle(titles[index]);
                setNextTitle(titles[newIndex]);
                setAnimationKey((prev) => prev + 1);
            }

            setIndex(newIndex);
        }, 5000);

        return () => clearInterval(interval);
    }, [index, isFirstLoad]);

    return (
        <div className="min-h-screen flex flex-col justify-end w-full gap-2 lg:gap-4 p-8 pb-32 md:p-14 md:gap-3">
            <h1 className="theme-title" style={{ margin: 0, padding: 0 }}>
                Michael Peluso
            </h1>
            <div className="theme-code text-lg md:text-3xl lg:text-4xl">{isFirstLoad ? <h2>{currentTitle}</h2> : <AnimatedTitle key={animationKey} start={currentTitle} end={nextTitle} />}</div>
            <div className="theme-body max-w-4xl text-lg md:text-xl lg:text-2xl" style={{ letterSpacing: "0.05rem" }}>
                <p>Hello there! I'm Michael, and I'm passionate about building innovative software applications and exploring experimental technology solutions.</p>
                <p className="mt-3">While pursuing my graduate degree in Computer Science at Georgia Tech, I decided to share some of my work online. Feel free to explore my skills, check out my projects, and maybe stay a while...</p>{" "}
            </div>
        </div>
    );
};

export default Hero;
