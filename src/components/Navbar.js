import React from "react";
import Logo from "../images/FalvinoLogo.png";
import "../index.css"
import BurgerButton from "./BurgerButton";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="mainBar">
          <a href="/">
            <img className="main-logo" src={Logo} alt="Falv logo" />
          </a>
          <BurgerButton />
          {/* <ul className="burger-button">
            <li>
              <button className="hamburger">
                <div className="bar"></div>
              </button>
            </li>
          </ul> */}
        </div>
      </nav>

      
    </div>
  );
}
