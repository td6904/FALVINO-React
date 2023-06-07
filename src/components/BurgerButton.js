import React, { useState } from "react";
import { Link } from "react-router-dom";

const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? "burger-line open1" : "burger-line"}></span>
        <span className={isOpen ? "burger-line open2" : "burger-line"}></span>
        <span className={isOpen ? "burger-line open3" : "burger-line"}></span>
      </button>
      {isOpen && (
        <div className="mobile-nav.is-active">
          <div className="menu">
            <ul>
              <li>
                <u>Menu</u>
              </li>
              <li>
                <Link to="/group">Le Groupe</Link>
              </li>
              <li>
                <Link to="">Prochaines Concerts</Link>
              </li>
              <li>
                <Link to="">Photos</Link>
              </li>
              <li>
                <Link to="">Videos</Link>
              </li>
              <li>
                <Link to="/discog">Discographie</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="">A la une</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerButton;
