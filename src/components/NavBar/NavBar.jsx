import "./NavBar.scss";

function NavBar() {
  return (
    <div className="nav">
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
