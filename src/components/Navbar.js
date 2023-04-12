import React from "react";
import Logo from "../images/FalvinoLogo.png";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div class="mainBar">
          <a href="/">
            <img class="main-logo" src={Logo} alt="Falv logo" />
          </a>
          <ul class="burger-button">
            <li>
              <button class="hamburger">
                <div class="bar"></div>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div class="mobile-nav">
        <ul>
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
        </ul>
      </div>
    </div>
  );
}
