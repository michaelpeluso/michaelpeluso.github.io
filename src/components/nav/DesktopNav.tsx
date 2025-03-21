import { Link, useLocation } from "react-router-dom";
import { CircleIcon } from "@radix-ui/react-icons";
import { FaCircle, FaMoon } from "react-icons/fa";

const DesktopNav = ({ pageItems, infoItems, isLightMode, toggleTheme }: { pageItems: any[]; infoItems: any[]; isLightMode: boolean; toggleTheme: () => void }) => {
    const location = useLocation();

    return (
        <>
            <nav className="fixed top-0 left-0 theme-body xl:text-xl">
                {/* Socials */}
                <div className="absolute top-1 h-full flex flex-col items-center gap-6 p-4">
                    {infoItems.map(({ name, icon, path }) => (
                        <a key={name} href={path} target="_blank" rel="noopener noreferrer" className="theme-link relative group flex items-center">
                            {icon}
                            <span className="z-0 absolute text-body left-0 opacity-0 transform translate-x-6 group-hover:opacity-100 group-hover:translate-x-7 transition-all duration-300 pointer-events-none " style={{ fontSize: "1rem" }}>
                                {name}
                            </span>
                        </a>
                    ))}
                </div>

                {/* Pages */}
                <div className="w-[100vw] h-[50px] flex justify-end pr-10">
                    <ul className="flex gap-10 items-center">
                        {pageItems.map(({ name, path }) => {
                            const isActive = location.pathname === path;
                            return (
                                <li key={name} className="relative flex items-center justify-center w-[80px]">
                                    {isActive ? (
                                        <CircleIcon className="w-5 h-5 text-primary" />
                                    ) : (
                                        <Link to={path} className="theme-link" style={{ textDecoration: "none" }}>
                                            {name}
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
            {/* Theme Toggle */}
            <div className="fixed bottom-4 left-4 cursor-pointer group flex items-center" onClick={toggleTheme}>
                {isLightMode ? <FaMoon className="w-6 h-6 group-hover:text-primary" /> : <FaCircle className="w-6 h-6 duration-300 group-hover:text-primary" />}
                <span className="z-0 absolute  left-1 opacity-0 transform translate-x-6 group-hover:opacity-100 group-hover:translate-x-7 transition-all duration-300 pointer-events-none " style={{ fontSize: "1rem" }}>
                    {isLightMode ? "Dark" : "Light"}
                </span>
            </div>
        </>
    );
};

export default DesktopNav;
