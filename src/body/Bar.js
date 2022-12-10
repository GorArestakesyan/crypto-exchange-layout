import React from "react";

function Bar({ progress, progressPercent, progressName }) {
  return (
    <div className="barWrapper">
      <span className="progressPercent">{progressPercent}</span>
      <div className="barContainer">
        <div className="bar" style={{ height: `${progress}%` }}>
          <div className="top"></div>
          <div className="middle-container">
            <div className="middle"></div>
          </div>
          <div className="bottom"></div>
        </div>
      </div>
      <span className="progressName">{progressName}</span>
    </div>
  );
}

export default Bar;
