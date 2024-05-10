import React from "react";
// import VideoPlay from "../VideoPlay/VideoPlay";
import "./Projects.scss";

import momospot from "../../assets/images/Screenshot-ThatMomoSpot.png";
import thegarden from "../../assets/images/Screenshot-TheGarden.png";
import diy from "../../assets/images/Screenshot-DIY.png";

function Projects() {
  return (
    <div className="section projects" id="projects">
      <div className="section-title">
        <h2 className="section-title__content">Projects</h2>
      </div>

      <div className="projects-container">
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
            {/* <VideoPlay
              project="The Garden at Ditmas"
              videoSource="/videos/theGarden-desktop.mp4"
            /> */}
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
            {/* <VideoPlay
              project="DIYourself"
              videoSource="/videos/DIY-desktop.mp4"
            /> */}
            <img
              className="projects__item-image"
              src={diy}
              alt="DIYourself website"
            />
            <p>DIYourself</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
