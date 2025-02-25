import React from "react";

const Footer = ({ pageItems, infoItems }: { pageItems: any[]; infoItems: any[] }) => {
    return (
        <footer className="bg-shadow py-6 mt-10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                {/* Left - Branding */}
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold text-body">Michael Peluso</h3>
                    <p className="text-sm text-muted">© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                {/* Center - Navigation Links */}
                <nav className="my-5 md:my-0">
                    <ul className="flex space-x-6 text-sm">
                        {pageItems.map((item) => (
                            <li key={item.name}>
                                <a href={item.path} className="theme-link">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Right - Social Media Links */}
                <div className="flex space-x-4 lg:text-xl">
                    {infoItems.map((item) => (
                        <a key={item.name} href={item.path} target="_blank" rel="noopener noreferrer" aria-label={item.name} className="theme-link">
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
