import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import Hamburger from "../Hamburger/Hamburger";

const NavBar = () => {
  const [hamburger, setHamburger] = useState(false);
  const toggleHamburger = () => {
    setHamburger(!hamburger);
    document.body.classList.toggle("no-scroll", !hamburger);
  };
  const closeHamburger = () => {
    setHamburger(false);
    document.body.classList.remove("no-scroll");
  };
  useEffect(() => {
    setHamburger(false);
    document.body.classList.remove("no-scroll");
  }, []);

  return (
    <div className="nav__mobile">
      <div className="hamburgerMenu" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburger} />
      </div>

      <ul className={hamburger ? "nav-links" : "nav-links__close"}>
        <a href="/" className="nav-menu" onClick={closeHamburger}>
          Home
        </a>

        <a href="#about" className="nav-menu" onClick={closeHamburger}>
          About Me
        </a>

        <a href="#projects" className="nav-menu" onClick={closeHamburger}>
          Projects
        </a>

        <a href="#mystack" className="nav-menu" onClick={closeHamburger}>
          My Stack
        </a>

        <a href="#contact" className="nav-menu" onClick={closeHamburger}>
          Let's Talk
        </a>

        <div className="links">
          <p>LinkedIn link</p>
          <p>GitHub link</p>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
