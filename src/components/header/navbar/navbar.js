import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";
import Register from "../../register/register";

class Navbar extends Component {
    render() {
        return (
            <nav className="classy-navbar" id="essenceNav">

                <a className="nav-brand" href="index.html"><img src="img/core-img/logo.png" alt=""/></a>

                <div className="classy-navbar-toggler">
                    <span className="navbarToggler"><span/><span/><span/></span>
                </div>

                <div className="classy-menu">

                    <div className="classycloseIcon">
                        <div className="cross-wrap"><span className="top"/><span
                            className="bottom"/></div>
                    </div>

                    <div className="classynav">
                        <ul>
                            <li><NavLink to={"/"}>Home</NavLink></li>
                            <li><Button to={"/Register"} className="btn-outline-info" onClick={Register}>Register</Button></li>
                            <li><a href="#">Pages</a>
                                <ul className="dropdown">
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="single-product-details.html">Product Details</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="single-blog.html">Single Blog</a></li>
                                    <li><a href="regular-page.html">Regular Page</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>

                </div>
            </nav>
        );
    }
}

export default Navbar;