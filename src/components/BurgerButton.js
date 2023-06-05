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
        <div className="menu">
          <p>Menu works</p>
        </div>
      )}
    </>
  );
};

export default BurgerButton;
