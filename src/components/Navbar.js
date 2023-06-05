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
          <ul className="burger-button">
            <li>
              <button className="hamburger">
                <div className="bar"></div>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mobile-nav">
        {/* <ul>
          <li>
            <u>Menu</u>
          </li>
          <li>
            <a href="/group">Le Groupe</a>
          </li>
          <li>
            <a href="">Prochaines Concerts</a>
          </li>
          <li>
            <a href="">Photos</a>
          </li>
          <li>
            <a href="">Videos</a>
          </li>
          <li>
            <a href="">Discographie</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">A la une</a>
          </li>
        </ul> */}
      </div>
    </div>
  );
}
