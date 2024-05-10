import React, { useState, useEffect } from "react";
import "./Projects.scss";
import projectsJSON from "../../data/project.json";

// import momospot from "../../assets/images/Screenshot-ThatMomoSpot.png";
// import thegarden from "../../assets/images/Screenshot-TheGarden.png";
// import diy from "../../assets/images/Screenshot-DIY.png";
import { Link } from "react-router-dom";

function Projects() {
  const [projectsList, setProjects] = useState([]);

  useEffect(() => {
    setProjects([...projectsJSON]);
  }, []);

  return (
    <div className="section projects" id="projects">
      <div className="section-title">
        <h2 className="section-title__content">Projects</h2>
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

      {/* <div className="projects-container">
        <div className="projects-container__item">
          <a
            className="projects__item"
            href="https://thatmomospot.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="projects__item-image"
              src={momospot}
              alt="That Momo Spot website"
            />
            <p>That Momo Spot</p>
          </a>
        </div>

        <div className="projects-container__item">
          <a
            className="projects__item"
            href="https://thegardenatditmas.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="projects__item-image"
              src={thegarden}
              alt="The Garden website"
            />
            <p>The Garden at Ditmas</p>
          </a>
        </div>

        <div className="projects-container__item">
          <a
            className="projects__item"
            href="https://diyourself.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="projects__item-image"
              src={diy}
              alt="DIYourself website"
            />
            <p>DIYourself</p>
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default Projects;
