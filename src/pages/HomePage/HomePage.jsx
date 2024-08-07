import React from "react";
import "./HomePage.scss";

import NavBar from "../../components/NavBar/NavBar";
import Landing from "../../components/Landing/Landing";
import AboutMe from "../../components/AboutMe/AboutMe";
import Projects from "../../components/MyProjects/Projects";
import MyStack from "../../components/MyStack/MyStack";
import Contact from "../../components/Contact/Contact";

function HomePage() {
  return (
    <div className="home" id="home">
      <NavBar />

      <Landing />

      <Projects />

      <AboutMe />

      <MyStack />

      <Contact />

      <div className="copyright">
        <p>Copyright 2024. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default HomePage;
