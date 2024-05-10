import React from "react";
import "./App.scss";

import AboutMe from "./components/AboutMe/AboutMe";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/MyProjects/Projects";
import MyStack from "./components/MyStack/MyStack";
import Contact from "./components/Contact/Contact";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <div className="app">
      <NavBar />

      <Landing />

      <AboutMe />

      <Projects />

      <MyStack />

      <Contact />
    </div>
  );
}

export default App;
