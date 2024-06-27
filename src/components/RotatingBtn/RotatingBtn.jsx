import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./RotatingBtn.scss";

const RotatingBtn = ({ textString, separator = " - " }) => {
  const [spans, setSpans] = useState([]);

  useEffect(() => {
    const totalDegrees = 360;
    const repeatedString = (textString + separator).repeat(3);
    const angleStep = totalDegrees / repeatedString.length;

    const newSpans = [];
    for (let i = 0; i < repeatedString.length; i++) {
      newSpans.push({
        char: repeatedString[i],
        transform: `rotate(${angleStep * i}deg)`,
      });
    }
    setSpans(newSpans);
  }, [textString, separator]);

  return (
    <div className="rotating-btn-container">
      <div className="rotating-btn">
        <p>
          {spans.map((span, index) => (
            <span key={index} style={{ transform: span.transform }}>
              {span.char}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

RotatingBtn.propTypes = {
  textString: PropTypes.string.isRequired,
  separator: PropTypes.string,
};

export default RotatingBtn;
