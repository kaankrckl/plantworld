import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css"
import logo from "../../logo.png";

const Navbar = () => {
    return(

        <header className="navbar">
            <nav className="navigation">
                <Link to="/">
                    <img src={logo} alt="lotus"/>
                </Link>
                <div className="space"/>
                <div className="nav-items">
                    <ul>
                        <Link to="/cart">
                        <li><i className="fa fa-shopping-cart"> </i> Cart</li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;