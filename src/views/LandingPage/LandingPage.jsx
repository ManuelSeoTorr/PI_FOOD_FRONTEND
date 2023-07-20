import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"

const LandingPage = () => {
    return (
        <div className="landingBackground">
            <div className="landingContainer">
                <h1>PI FOOD HENRY - MANUEL SEOANE TORREALBA</h1>
                <p>Welcome to this SPA, where you will find the recipe you have been looking for</p>
                <Link to='/home'>
                    <button className="enterButton">Let`s get started</button>
                </Link>
            </div>
        </div>

    )
}

export default LandingPage;