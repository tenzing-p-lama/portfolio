import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProjectDetails.scss";

import projectsJSON from "../../data/project.json";

function ProjectDetails() {
  const { id } = useParams();
  const [projectsList, setProjects] = useState(projectsJSON);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectDetails = projectsList.find(
    (project) => project.id === id.toString()
  );

  useEffect(() => {
    setProjects(projectsJSON);
  }, []);

  const goToPreviousProject = () => {
    const currentIndex = projectsList.findIndex((project) => project.id === id);
    if (currentIndex > 0) {
      const previousProjectId = projectsList[currentIndex - 1].id;
      window.location.href = `/project/${previousProjectId}`;
    }
  };

  const goToNextProject = () => {
    const currentIndex = projectsList.findIndex((project) => project.id === id);
    if (currentIndex < projectsList.length - 1) {
      const nextProjectId = projectsList[currentIndex + 1].id;
      window.location.href = `/project/${nextProjectId}`;
    }
  };

  const totalCount = projectsList.length;
  const currentIndex = projectsList.findIndex((project) => project.id === id);
  const currentCount = currentIndex + 1;

  // Disable button when there's no more projects to show
  const isPreviousDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === projectsList.length - 1;

  function formatDescription(description) {
    return description
      .split("\n\n")
      .map((text, index) => <p key={index}>{text}</p>);
  }

  return (
    <div className="projectdetails">
      <div className="navigate">
        <Link className="navigate__home" to="/">
          Back to Home
        </Link>

        <Link className="navigate__mail" to="mailto:tenzingpalden520@gmail.com">
          Contact Me
        </Link>
      </div>

      {projectDetails && (
        <div className="projectdetails__content">
          <div className="projectdetails__image">
            <img
              className="projectdetails__image-img"
              src={projectDetails.image}
              alt={projectDetails.title}
            />
          </div>

          <div className="projectdetails__content-info">
            <h2 className="projectdetails__content-title">
              {projectDetails.title}
            </h2>

            <div className="projectdetails__content-desc">
              {formatDescription(projectDetails.description)}
            </div>

            <p className="projectdetails__content-op">
              Technology: <span>{projectDetails.technology}</span>
            </p>

            <p className="projectdetails__content-op">
              My role: <span>{projectDetails.role}</span>
            </p>

            <p className="projectdetails__content-op">
              Project Link:
              <a
                href={projectDetails.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {projectDetails.title}
              </a>
            </p>
          </div>
        </div>
      )}

      <div className="projectdetails__pageinfo">
        <span>
          {currentCount}/{totalCount}
        </span>

        <div className="projectdetails__navigation">
          <button onClick={goToPreviousProject} disabled={isPreviousDisabled}>
            Previous
          </button>

          <button onClick={goToNextProject} disabled={isNextDisabled}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
