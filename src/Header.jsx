import React from "react";

function Header() {
    return(
        <nav>
        <div className="navbar">
            <div class="logo">
                <a href="#">The Curly Films</a>
            </div>
            <div className="menu-toggle" id="hamburger">
                <i class="fas fa-bars"></i>
            </div>
            <ul className="list-item" id="menuList">
                <li><a href="#team">Team</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#">Price</a></li>
                <li><a href="#contactUs">Contact</a></li>
            </ul>
        </div>
    </nav>
    )
}


export default Header