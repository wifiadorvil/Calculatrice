import React from "react";
import logo from "../logo.svg";

export default function NavBar()
{
return(
    <nav>
        <img src={logo} className="nav--icon"></img>
        <h3 className="nav--logo_text">RealFacts</h3>
        <h4 className="nav--title">React Course-Project 1</h4>
    </nav>
)
}