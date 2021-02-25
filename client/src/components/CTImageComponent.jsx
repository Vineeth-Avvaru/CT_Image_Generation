import React from "react";
import testImage from "../assets/images/test.png";
import "./CTImageComponent.css";

function CTImage() {
  return (
    <div className="ctimage-container">
      <img src={testImage}></img>
      <div className="ctimage-buttons">
        <button>Torso</button>
        <button>Lung R</button>
        <button>Lung L</button>
        <button>Spine</button>
        <button>Heart</button>
      </div>
    </div>
  );
}

export default CTImage;
