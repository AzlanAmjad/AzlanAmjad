import Logo from "./Logo";
import MobileNavBar from "./MobileNavBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleNav() {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="z-40 flex justify-between items-center bg-night py-8 px-14 font-bold text-2xl w-full fixed top-0 left-0">
            <Logo />
            <FontAwesomeIcon
                icon={faHamburger}
                className="cursor-pointer transition ease-in-out duration-500 hover:scale-110 md:hidden"
                onClick={toggleNav}
            />
            <MobileNavBar
                className={`fixed inset-0 bg-night z-50 transition-transform transform ${
                    isOpen
                        ? "translate-y-0"
                        : "translate-y-full"
                } duration-1000 ease-in-out flex flex-col gap-y-12 justify-center items-center`}
                toggleNav={toggleNav}
            />
            <ul className="hidden md:flex md:w-[22rem] md:justify-between ">
                <li className="transition ease-in-out duration-300 hover:scale-110 hover:text-lightBlue hover:font-medium">
                    <Link to="/">Home</Link>
                </li>
                <li className="transition ease-in-out duration-300 hover:scale-110 hover:text-lightBlue hover:font-medium">
                    <Link to="/work">Work</Link>
                </li>
                <li className="transition ease-in-out duration-300 hover:scale-110 hover:text-lightBlue hover:font-medium">
                    <Link to="/about">About</Link>
                </li>
                <li className="transition ease-in-out duration-300 hover:scale-110 hover:text-lightBlue hover:font-medium">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
