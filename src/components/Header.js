import React from "react";
import defaultUser from "../images/default-user-image.png"
import logo from "../images/logo.png"


export default function Header() {
    return (
        <header className="header">
            <div className="header_content">
                <a href="#" className="logo">
                    <img src={logo} alt=""/>
                </a>

                <div className="profile">
                    <img src={defaultUser} alt=""/>
                </div>
            </div>
        </header>
    )
}