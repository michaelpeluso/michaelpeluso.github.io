import React from "react";

const HoverList = () => {
    const items = ["About Me", "Projects", "Experience", "Education"];

    return (
        <nav className="h-screen flex justify-center items-center">
            <ul className="m-auto space-y-4">
                {items.map((item, index) => (
                    <li key={index} className="relative text-[42px] leading-[1.5] group">
                        <a
                            href="#"
                            className="text-transparent bg-clip-text bg-[length:200%_100%] bg-[right] hover:bg-[left] transition-all duration-300 ease-custom cubic-bezier(0,0,.23,1) cursor-pointer pr-10" // Added padding-right
                            style={{
                                backgroundImage: `linear-gradient(to right, #283271, #283271 50%, #d7a150 50%)`,
                            }}
                        >
                            {item}
                        </a>
                        <span className="absolute top-1/2 transform -translate-y-1/2 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-[primary] transition-transform duration-500 group-hover:translate-x-2">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default HoverList;
