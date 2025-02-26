import { useState } from "react";
import SpecialContainer from "../basic/SpecialContainer";
import SkillRadar from "./SkillRadar";

const Highlights = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="w-[80%] md:w-[75%] lg:w-[66%] xl:w-[55%] mx-auto" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <SpecialContainer className="li-10 bg-content text-center rounded-none md:rounded-xl  pointer-events-none md:pointer-events-auto">
                <div className="theme-subtitle relative inline-block overflow-hidden px-3 mb-5 duration-200">
                    <span className="relative z-10">Highlights</span>
                    <div className={`absolute inset-0 bg-primary transform origin-left transition-transform duration-500 -z-10 ${isHovered ? "translate-x-full" : "-translate-x-full h-0"}`} />
                </div>

                <div className="flex flex-col lg:flex-row justify-between px-5 items-center">
                    <div>
                        <div className="theme-muted text-left flex flex-col gap-3 mb-7 text-md md:text-lg lg:text-xl">
                            <li className="text-body">
                                Pursuing a Master's in <span className="text-body ">Computer Science</span> at Georgia Tech
                            </li>
                            <li className="text-body">
                                Earned a Bachelor's in <span className="text-body">Information Technology</span> from NJIT
                            </li>
                            <li className="text-body">
                                Graduated early with <span className="text-body">Honors</span>, earning 2 minors
                            </li>
                            <li className="text-body">
                                Secured <span className="text-body">5</span> tech internships
                            </li>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <SkillRadar />
                    </div>
                </div>
            </SpecialContainer>
        </section>
    );
};

export default Highlights;
