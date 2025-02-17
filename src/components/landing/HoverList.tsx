const HoverList = ({ items }: { items: any[] }) => {
    return (
        <nav className="flex theme-subtitle text-white p-3">
            <ul className="flex flex-col gap-1">
                {items.map((item, index) => (
                    <li key={index} className="relative leading-[1.5] group">
                        <a href={item.path} className=" transition-all duration-500 ease-in-out cursor-pointer pr-2 ">
                            {item.name}
                        </a>
                        <span className="absolute top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="transition-transform duration-500 group-hover:translate-x-2">&gt;</div>
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default HoverList;
