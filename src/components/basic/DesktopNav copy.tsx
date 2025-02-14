import { Link } from "react-router-dom";

const DesktopNav = ({ navItems }: { navItems: any[] }) => {
    return (
        <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 p-4 z-50">
            <ul className="flex gap-12  rounded-xl backdrop-blur-2xl bg-white/5 p-2 px-5">
                {navItems.map(({ name, icon, path }) => (
                    <li key={name} className="relative flex items-center justify-center">
                        <Link to={path} className="flex flex-col items-center gap-2 p-2 text-white transition-all duration-300 group">
                            {/* Icon */}
                            <div className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-[-10px] ">{icon}</div>

                            {/* Text */}
                            <span className="absolute bottom-0 opacity-0 translate-y-[10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-[-5px]">{name}</span>

                            {/* Underline */}
                            <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default DesktopNav;
