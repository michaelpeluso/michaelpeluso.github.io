import { useState, useEffect, useRef } from "react";
import SpecialContainer from "../basic/SpecialContainer";

const HighlightEffect = ({ children }: { children: React.ReactNode }) => {
    const [isInView, setIsInView] = useState(false);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.5 }
        );

        if (titleRef.current) observer.observe(titleRef.current);

        return () => {
            if (titleRef.current) observer.unobserve(titleRef.current);
        };
    }, []);

    return (
        <h2 ref={titleRef} className="text-shadow">
            <span className="relative z-10">{children}</span>
            <div className={`absolute inset-0 bg-accent transform origin-left transition-transform duration-1000 -z-10 ${isInView ? "scale-x-100" : "scale-x-0"}`} />
        </h2>
    );
};

const Highlights = () => {
    return (
        <section className="max-w-3xl mx-auto text-center">
            <SpecialContainer className="bg-shadow p-8">
                <div className="theme-subtitle relative inline-block overflow-hidden px-3 py-1 mb-5">
                    <HighlightEffect>Highlights</HighlightEffect>
                </div>

                <div className="theme-muted flex flex-col gap-3">
                    <p className="text-lg">
                        Pursuing a Master's in <span className="text-body">Computer Science</span> at Georgia Tech
                    </p>
                    <p className="text-lg">
                        Earned a Bachelor's in <span className="text-body">Information Technology</span> from NJIT
                    </p>
                    <p className="text-lg">
                        Graduated early with <span className="text-body">Honors</span>, earning 2 minors
                    </p>
                    <p className="text-lg">
                        Secured <span className="text-body">5</span> tech internships
                    </p>
                </div>
            </SpecialContainer>
        </section>
    );
};

export default Highlights;
