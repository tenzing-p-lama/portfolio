import React from "react";
import "./App.scss";
import AboutMe from "./components/AboutMe/AboutMe";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/MyProjects/Projects";
import MyStack from "./components/MyStack/MyStack";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <NavBar />

      <Header />

      <AboutMe />

      <Projects />

      <MyStack />

      <Contact />
    </div>
  );
}

export default App;
