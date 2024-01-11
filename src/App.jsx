import React from "react";
import "./App.scss";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <div>
      <header className="main-container">
        <div className="main">
          <section className="main-contact">
            <h4>Fullstack Developer</h4>
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
    </div>
  );
}

export default App;
