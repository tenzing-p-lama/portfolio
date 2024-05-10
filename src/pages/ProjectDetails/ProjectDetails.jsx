import "./ProjectDetails.scss";

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import projectsJSON from "../../data/project.json";

function ProjectDetails() {
  const { id } = useParams();

  const [projectsList, setProjects] = useState(projectsJSON);
  const projectDetails = projectsList.find(
    (project) => project.id === id.toString()
  );

  return (
    <>
      <h2>Project Details</h2>

      {projectDetails && (
        <div className="project">
          <h3>{projectDetails.title}</h3>
          <p>{projectDetails.description}</p>

          <p>{projectDetails.technology}</p>
          <p>{projectDetails.role}</p>
        </div>
      )}
    </>
  );
}

export default ProjectDetails;
