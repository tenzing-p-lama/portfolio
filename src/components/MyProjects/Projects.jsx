import React, { useState, useEffect } from "react";
import "./Projects.scss";
import projectsJSON from "../../data/project.json";

import { Link } from "react-router-dom";
import RotatingBtn from "../RotatingBtn/RotatingBtn";

function Projects() {
  const [projectsList, setProjects] = useState([]);

  useEffect(() => {
    setProjects([...projectsJSON]);
  }, []);

  return (
    <div className="section projects" id="projects">
      <div className="section-title">
        <h2 className="section-title__content">My Projects</h2>
      </div>

      <ul className="projects-container">
        {[...projectsList].reverse().map((project) => (
          <div key={project.id} className="projects-container__item">
            <div>
              <Link to={`/project/${project.id}`} className="projects__item">
                <img
                  className="projects__item-image"
                  src={project.image}
                  alt={project.title}
                />

                <h2>{project.title}</h2>
              </Link>
            </div>
          </div>
        ))}
      </ul>

      <a
        className="projects-link"
        href="https://github.com/tenzing-p-lama"
        target="_blank"
        rel="noreferrer"
      >
        <RotatingBtn textString="See More" />
      </a>
    </div>
  );
}

export default Projects;
