import React from "react"
import airbnbLogo from "../assets/images/Airbnb-Logo.png"
import "../index.css"
export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src={airbnbLogo} alt="airbnb logo" className="nav--logo" />
            </div>          
        </nav>
    )
}