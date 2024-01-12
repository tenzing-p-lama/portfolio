import React from "react";
import "./App.scss";
import AboutMe from "./components/AboutMe/AboutMe";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="app">
      <NavBar />

      <header className="main-container">
        <div className="main">
          <section className="main-contact">
            <h2>Fullstack Developer</h2>
            <div className="main-contact__links">
              <p>LinkedIn</p>
              <p>GitHub</p>
              <p>Email</p>
            </div>
          </section>

          <section className="main-header">
            <h1>Tenzing</h1>
            <h1>Palden</h1>
            <h1>Lama</h1>
          </section>
        </div>
      </header>

      <AboutMe />

      <Projects />
    </div>
  );
}

export default App;
