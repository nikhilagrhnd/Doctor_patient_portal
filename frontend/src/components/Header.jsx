import * as React from "react";
import { createRoot } from "react-dom/client";
import './Header.css'


function Header() {
    return (
        <div>
            <nav class="navbar">
                <div class="logo">MyLogo</div>
                <ul class="nav-links">
                    <li><a href="/Homepage">Home</a></li>
                    <li><a href="/Login">Login</a></li>
                    <li><a href="/Signup">Signup</a></li>
                </ul>
                <div class="burger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
            </nav>
        </div>
    )
}

export default Header;