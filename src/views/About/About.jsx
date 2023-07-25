import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

import ic_react from "../../assets/icons/ic_react.png";
import ic_redux from "../../assets/icons/ic_redux.png";
import ic_javascript from "../../assets/icons/ic_javascript.png";
import ic_sequelize from "../../assets/icons/ic_sequelize.png";
import ic_postgresql from "../../assets/icons/ic_postgresql.png";
import ic_html from "../../assets/icons/ic_html.png";
import ic_css from "../../assets/icons/ic_css.png";
import ic_nodejs from "../../assets/icons/ic_nodejs.png";
import ic_linkedin from "../../assets/icons/ic_linkedin.png";

const About = () => {
  return (
    <div className="aboutBackground">
      <div className="aboutContainer">
        <div className="createdBy">
          <h1>Created by</h1>
          <h2>Manuel Seoane Torrealba</h2>
          <a
            className="noStyle"
            target="_blank"
            href="https://www.linkedin.com/in/manuel-seoane-123221263/"
          >
            <img
              className="technologieIcon"
              src={ic_linkedin}
              alt="not found"
            ></img>
          </a>
        </div>
        <div className="aboutContainer">
          <h1>About</h1>
          <p>Breve descripcion de mi persona</p>
          <div className="tecnologiesContainer">
            <h1>Technologies used in this project:</h1>
            <div className="technoInfo">
              <img
                className="technologieIcon"
                src={ic_javascript}
                alt="not found"
              ></img>
              <h2>JavaScript</h2>
            </div>
            <div className="technoInfo">
              <img
                className="technologieIcon"
                src={ic_react}
                alt="not found"
              ></img>
              <h2>React</h2>
            </div>
            <div className="technoInfo">
              <img
                className="technologieIcon"
                src={ic_redux}
                alt="not found"
              ></img>
              <h2>Redux</h2>
            </div>
            <div className="technoInfo">
              <img
                className="technologieIcon"
                src={ic_html}
                alt="not found"
              ></img>
              <h2>HTML</h2>
            </div>
            <div className="technoInfo">
              <img
                className="technologieIcon"
                src={ic_css}
                alt="not found"
              ></img>
              <h2>CSS</h2>
            </div>
            <div className="technoInfo">
              <img
                className="technologieIcon"
                src={ic_nodejs}
                alt="not found"
              ></img>
              <h2>Node.js</h2>
            </div>
            <div className="technoInfo">
              <img
                className="technologieIcon"
                src={ic_sequelize}
                alt="not found"
              ></img>
              <h2>Sequelize</h2>
            </div>
            <div className="technoInfo">
              <img
                className="technologieIcon"
                src={ic_postgresql}
                alt="not found"
              ></img>
              <h2>PostgreSQL</h2>
            </div>
          </div>
        </div>
        <Link to="/home">
          <button className="homeButton">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default About;

// return (
//     <div className="aboutDiv">
//         <a className="notLine" target="_blank" rel="noreferrer" href={myLinkedin}>
//             <div className="aboutCreator">
//                     <h1>Created by</h1>
//                     <h2>Ramiro Dominguez</h2>
//                     <img src={ic_linkedin} alt="not found"></img>
//             </div>
//         </a>
//         <div className="aboutFlex">
//             <div className="aboutRow">
//                 <img src={ic_recipe} alt="Not found"></img>
//                 <h1>About</h1>
//             </div>
//             {techs && techs.length > 0 &&
//             <div className="aboutTechsDiv">
//                 <h1>Technologies used in this project</h1>
//                 {techs && techs?.map((t, i) =>
//                     <div key={i} className="aboutTechs">
//                         <img className="about" src={t.icon} alt="not found"></img>
//                         <h2>{t.name}</h2>
//                     </div>
//                 )}
//             </div>}
//             <Link to="/home">
//                 <button>Home</button>
//             </Link>
//         </div>
//     </div>
// );
// }
