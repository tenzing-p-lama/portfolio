import React, { useRef } from "react";
import "./VideoPlay.scss";

const VideoPlay = (props) => {
  const videoRef = useRef(null);

  const handleHover = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  const handleLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="video-container"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <span>{props.project}</span>
      {props.videoSource && (
        <video className="video-container__player" ref={videoRef} muted>
          <source src={props.videoSource} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default VideoPlay;
