import React from "react";
import { FiArrowRight } from "react-icons/fi";

const HoverList = () => {
    const items = ["About Me", "Projects", "Experience", "Education"];

    return (
        <nav className="h-screen flex justify-center items-center font-subtitle text-white">
            <ul className="m-auto space-y-4">
                {items.map((item, index) => (
                    <li key={index} className="relative text-[42px] leading-[1.5] group">
                        <a href="#" className=" transition-all duration-500 ease-in-out cursor-pointer pr-10 ">
                            {item}
                        </a>
                        <span className="absolute top-1/2 transform -translate-y-1/2 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <FiArrowRight className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-2" />
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default HoverList;
