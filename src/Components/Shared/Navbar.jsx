
import { IoMdCart } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeLink = "text-orange-400  font-bold underline underline-offset-8 text-base flex items-center gap-1 uppercase";
    const deActiveLink = "transition-all hover:underline underline-offset-8 hover:text-[#CFAE7A]  flex items-center gap-1 uppercase";
    return (
        <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
                <img src="/src/assets/Logo.png" className="h-10 w-10" alt="" />
                
                <p className="text-4xl font-bold">BOOKIO</p>
            </div>
            <div className="flex justify-between items-center gap-20">
                <ul className="flex items-center gap-5">
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? activeLink : deActiveLink)} to={"/"}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? activeLink : deActiveLink)} to={"/explore"}>
                            Explore Books
                        </NavLink>
                    </li>
                </ul>
                <div className="">
                    <NavLink
                        className={({ isActive }) => (isActive ? activeLink : deActiveLink)} to={"/wishlist"}>
                        <IoMdCart className="text-2xl" />
                    </NavLink>
                </div>
            </div>

        </div >
    );
};

export default Navbar;