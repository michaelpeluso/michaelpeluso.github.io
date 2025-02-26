import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const MobileNav = ({ pageItems, infoItems }: { pageItems: any[]; infoItems: any[] }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && !(event.target as HTMLElement).closest(".mobile-menu")) {
                setIsOpen(false);
            }
        };
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false);
        };

        document.addEventListener("click", handleClickOutside);
        document.addEventListener("keydown", handleEscapeKey);

        return () => {
            document.removeEventListener("click", handleClickOutside);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, [isOpen]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
    }, [isOpen]);

    return (
        <nav className="w-full h-full p-4 z-100 theme-body">
            {/* Show Social on "/" */}
            {location.pathname === "/" && (
                <div className="absolute flex top-4 flex-col gap-4 mt-1 left-4">
                    {infoItems.map(({ name, icon, path }) => (
                        <Link key={name} to={path} onClick={() => setIsOpen(false)} className="block hover:opacity-60 transition-opacity duration-200">
                            {icon}
                        </Link>
                    ))}
                </div>
            )}

            <div className="fixed top-0 right-0 p-4">
                {/* Hamburger Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation(); // Prevents click event from propagating
                        setIsOpen(!isOpen);
                    }}
                    className="text-white text-3xl focus:outline-none"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    {!isOpen && <FaBars />}
                </button>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className="fixed inset-0 bg-background/75 backdrop-blur-lg flex items-center justify-center">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsOpen(false);
                            }}
                            className="fixed top-4 right-4 z-50 text-3xl"
                            aria-label="Close menu"
                        >
                            <FaTimes />
                        </button>
                        <div
                            id="mobile-menu"
                            className="mobile-menu flex flex-col items-center gap-6 transition-transform duration-300 ease-in-out"
                            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
                        >
                            {/* Page Links */}
                            {pageItems.map(({ name, path }) => (
                                <Link key={name} to={path} onClick={() => setIsOpen(false)} style={{ fontSize: "1.25rem" }}>
                                    {name}
                                </Link>
                            ))}

                            <div className="flex flex-col gap-5 mt-5 pt-5">
                                {infoItems.map(({ name, icon, path }) => (
                                    <Link key={name} to={path} onClick={() => setIsOpen(false)} className="m-auto">
                                        {name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default MobileNav;
