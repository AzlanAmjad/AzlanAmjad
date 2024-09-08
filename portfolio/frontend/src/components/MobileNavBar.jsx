import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function MobileNavBar({ className, toggleNav }) {
    return (
        <div className={className}>
            <ul className="flex flex-col gap-y-7 justify-between items-center text-5xl">
                <li onClick={toggleNav}>
                    <Link to="/">Home</Link>
                </li>
                <li onClick={toggleNav}>
                    <Link to="/work">Work</Link>
                </li>
                <li onClick={toggleNav}>
                    <Link to="/about">About</Link>
                </li>
                <li onClick={toggleNav}>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <FontAwesomeIcon 
                icon={faClose}
                size="2x"
                className="cursor-pointer transition ease-in-out duration-500 hover:scale-110"
                onClick={toggleNav}
            />
        </div>
    );
}

export default MobileNavBar;
