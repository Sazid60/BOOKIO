import { useState } from "react";
import { IoMdCart } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineTravelExplore } from "react-icons/md";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Handle opening and closing the side nav
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Styles for main navbar links
    const activeLink = "text-orange-400 font-bold underline underline-offset-8 text-base flex items-center gap-1 uppercase";
    const deActiveLink = "transition-all hover:underline underline-offset-8 hover:text-[#CFAE7A] flex items-center gap-1 uppercase";

    // Styles for side nav links with varying text sizes for different devices
    const sideActiveLink = "text-orange-400 font-bold text-sm md:text-xl lg:text-2xl flex items-center gap-1 uppercase"; // Adjusted for responsiveness
    const sideDeActiveLink = "transition-all hover:text-[#CFAE7A] text-sm md:text-xl lg:text-2xl flex items-center gap-1 uppercase"; // Adjusted for responsiveness

    return (
        <>
            {/* Main Navbar */}
            <div className="flex items-center justify-between py-4 px-4 md:px-8 lg:px-12 xl:px-16">
                {/* Logo */}
                <div className="flex items-center">
                    <img src="/assets/Logo.png" className="h-9 w-10" alt="Logo" />
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold ml-2">BOOKIO</p>
                </div>

                {/* Large Screen Links */}
                <div className="hidden md:flex justify-between items-center gap-20">
                    <ul className="flex items-center gap-5">
                        <li>
                            <NavLink
                                className={({ isActive }) => (isActive ? activeLink : deActiveLink)}
                                to={"/"}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => (isActive ? activeLink : deActiveLink)}
                                to={"/explore"}
                            >
                                Explore Books
                            </NavLink>
                        </li>
                    </ul>
                    <div>
                        <NavLink
                            className={({ isActive }) => (isActive ? activeLink : deActiveLink)}
                            to={"/wishlist"}
                        >
                            <IoMdCart className="text-2xl" />
                        </NavLink>
                    </div>
                </div>

                {/* Hamburger Menu for Small Devices */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        <FiMenu className="text-3xl" />
                    </button>
                </div>
            </div>

            {/* Overlay for Small Devices */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out md:hidden"
                    onClick={toggleMenu} // Clicking outside the side nav will close it
                ></div>
            )}

            {/* Side Navigation for Small Screens */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-[#faedca] shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out md:hidden`}
            >
                {/* Close Icon inside Side Nav */}
                <div className="flex justify-between p-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src="/assets/Logo.png" className="h-9 w-10" alt="Logo" />
                        <p className="text-2xl md:text-3xl lg:text-4xl font-bold ml-2">BOOKIO</p>
                    </div>
                    <button onClick={toggleMenu}>
                        <FiX className="text-3xl" />
                    </button>
                </div>

                <ul className="flex flex-col gap-6 mt-8 px-6">
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? sideActiveLink : sideDeActiveLink)}
                            to={"/"}
                            onClick={toggleMenu}
                        >
                            
                            <IoHomeOutline className="text-lg" />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? sideActiveLink : sideDeActiveLink)}
                            to={"/explore"}
                            onClick={toggleMenu}
                        >
                           
                            <MdOutlineTravelExplore className="text-lg" />
                            Explore Books
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? sideActiveLink : sideDeActiveLink)}
                            to={"/wishlist"}
                            onClick={toggleMenu}
                        >
                            <IoMdCart className="text-lg" />
                            WISHLIST
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
