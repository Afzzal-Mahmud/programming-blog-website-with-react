import React from "react";
import "./Header.css"

function Header() {
    return(
       <header>
            <div className="container">
            <nav>
                <div className="logo">
                    <h3 style={{color:"#e8e5e1"}}>TopTen.net</h3>
                </div>
                <div className="nav-link">
                    <ul>
                        <li><a href="/Home">Home</a></li>
                        <li><a href="/About">About</a></li>
                        <li><a href="/login">Log-In</a></li>
                    </ul>
                </div>
            </nav>
        </div>
       </header>
    )
}
export default Header;