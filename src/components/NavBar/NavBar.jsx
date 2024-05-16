import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import Hamburger from "../Hamburger/Hamburger";

function NavBar() {
  const [hamburger, setHamburger] = useState(false);
  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };

  useEffect(() => {
    setHamburger(false);
  }, []);

  return (
    <div className="nav">
      <div className="hamburgerMenu" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburger} />
      </div>

      <a href="/" className="nav-menu">
        Home
      </a>
      <a href="#about" className="nav-menu">
        About Me
      </a>
      <a href="#projects" className="nav-menu">
        Projects
      </a>
      <a href="#mystack" className="nav-menu">
        My Stack
      </a>

      <a href="#contact" className="nav-menu">
        Let's Talk
      </a>
    </div>
  );
}

export default NavBar;
