import React from "react";
import VideoPlay from "../VideoPlay/VideoPlay";
import "./Projects.scss";

function Projects() {
  return (
    <div className="section projects" id="projects">
      <div className="section-title">
        <h2 className="section-title__content">Projects</h2>
      </div>

      <div className="projects-content">
        <div className="projects-content__item">
          <a href="https://thegardenatditmas.netlify.app/" target="_blank">
            <VideoPlay
              project="The Garden at Ditmas"
              videoSource="/videos/theGarden-desktop.mp4"
            />
          </a>
        </div>

        <div className="projects-content__item">
          <a href="https://diyourself.netlify.app/" target="_blank">
            <VideoPlay
              project="DIYourself"
              videoSource="/videos/DIY-desktop.mp4"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
