import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for opening/closing menu

const MobileNav = ({ pageItems, infoItems }: { pageItems: any[]; infoItems: any[] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 right-0 p-4 z-50">
            {/* Hamburger Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                {pageItems.map(({ name, icon, path }) => (
                    <Link key={name} to={path} onClick={() => setIsOpen(false)} className="relative text-white text-2xl flex flex-col items-center transition-all duration-300 group">
                        {/* Icon (Visible by Default) */}
                        <div className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-[-10px]">{icon}</div>

                        {/* Text (Appears on Hover) */}
                        <span className="absolute opacity-0 translate-y-[10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-[-8px]">{name}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default MobileNav;
