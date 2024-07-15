import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navbar = useRef();

    const showNavbar = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <div className="navbar">
                <div className="logo">
                    <a href="#">The Curly Films</a>
                </div>
                <div className="menu-toggle" id="hamburger" onClick={showNavbar}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <ul className={`list-item ${isMenuOpen ? "active" : ""}`} id="menuList" ref={navbar}>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#">Price</a></li>
                    <li><a href="#contactUs">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
