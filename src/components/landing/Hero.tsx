import React, { useState, useEffect } from "react";
import AnimatedTitle from "../basic/AnimatedTitle";

const titles = ["Software Developer", "Machine Learning Engineer", "Full-Stack Web Architect", "Cloud Solutions Engineer", "Data Scientist", "AI Engineer", "DevOps & Systems Architect", "Computer Scientist", "IT Expert"];

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
        <div className="text-white">
            <h1 className="theme-title text-4xl md:text-6xl lg:text-9xl translate-y-7 sm:translate-y-8">Michael Peluso</h1>
            <div className="theme-code text-xl md:text-2xl lg:text-4xl my-2 text-white">{isFirstLoad ? <h2>{currentTitle}</h2> : <AnimatedTitle key={animationKey} start={currentTitle} end={nextTitle} />}</div>
            <p className="theme-body max-w-2xl">
                Hello there! While pursuing my graduate degree in Computer Science at Georgia Tech, I decided to share some of my work online. Feel free to explore my skills, check out my projects, and maybe stay a while...
            </p>
        </div>
    );
};

export default Hero;
