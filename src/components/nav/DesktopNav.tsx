import { Link } from "react-router-dom";

const DesktopNav = ({ pageItems, infoItems }: { pageItems: any[]; infoItems: any[] }) => {
    return (
        <nav className="fixed top-0 left-0 w-full h-full text-white font-body">
            {/* home */}
            <Link to="/" className="absolute top-0 left-0 w-[50px] h-[50px] flex justify-center items-center hover:cursor-pointer opacity-100 hover:opacity-60 transition-opacity duration-200 z-50">
                MP
            </Link>
            {/* socials */}
            <div className="absolute h-[100vh] w-[50px] ">
                <div className="absolute top-[50px] left-0 w-[50px] flex flex-col items-center gap-6 p-4">
                    {infoItems.map(({ name, icon, path }) => (
                        <a key={name} href={path} target="_blank" rel="noopener noreferrer" className="text-white opacity-100 hover:opacity-60 transition-opacity duration-200">
                            {icon}
                        </a>
                    ))}
                </div>
            </div>

            {/* pages */}
            <div className="w-100 h-[50px] ">
                <ul className="absolute top-0 right-10 h-[50px] flex gap-10 items-center">
                    {pageItems.map(({ name, icon, path }) => (
                        <Link to={path}>
                            <li key={name} className="flex items-center gap-2 opacity-100 transition-opacity duration-300 hover:cursor-pointer hover:opacity-60">
                                {name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default DesktopNav;
