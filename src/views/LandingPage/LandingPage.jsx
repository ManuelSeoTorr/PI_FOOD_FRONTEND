import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landingBackground">
      <div className="landingContainer">
        <video id="background-video" autoPlay loop muted poster="">
          <source
            src="https://v4.cdnpk.net/videvo_files/video/free/video0468/large_watermarked/_import_615e879da73ba7.00965427_FPpreview.mp4"
            type="video/mp4"
          />
        </video>
        <div className="landingText">
          <h1>PI FOOD HENRY - MANUEL SEOANE TORREALBA</h1>
          <p>
            Welcome to this SPA, where you will find the recipe you have been
            looking for
          </p>
          <Link to="/home">
            <button className="enterButton">Let`s get started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
