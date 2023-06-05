import React, { useState } from "react";

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
      )}
    </>
  );
};

export default BurgerButton;
