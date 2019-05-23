import React from "react";
import "./style.css";

function Navbar() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand logo" href="#">Fesco</a>
                <div className="navbar-menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;