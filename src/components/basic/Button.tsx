import { useRef } from "react";
import { Link } from "react-router-dom";

export const Button = ({ title, link }: { title: string; link: string }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
        <div className="relative w-56">
            <Link to={link} className="underline underline-offset-4 sm:no-underline">
                <button ref={buttonRef} className="backdrop-blur-md h-12 w-full cursor-pointer rounded-lg bg-content duration-300 focus:border-secondary focus:outline-none hover:bg-shadow">
                    {title}
                </button>
            </Link>
        </div>
    );
};
