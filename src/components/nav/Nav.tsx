import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Nav = ({ pageItems, infoItems }: { pageItems: any[]; infoItems: any[] }) => {
    return (
        <>
            <div className="hidden md:block">
                <DesktopNav pageItems={pageItems} infoItems={infoItems} />
            </div>
            <div className="block md:hidden">
                <MobileNav pageItems={pageItems} infoItems={infoItems} />
            </div>
        </>
    );
};

export default Nav;
