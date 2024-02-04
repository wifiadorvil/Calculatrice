import React from "react";
import logo from "../calccul.png";

export default function NavBar()
{
return(
    <nav>
        <img src={logo} className="nav--icon"></img>
        <h3 className="nav--logo_text">Calculator</h3>
    </nav>
)
}