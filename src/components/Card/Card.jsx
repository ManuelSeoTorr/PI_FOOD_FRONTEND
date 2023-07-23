import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card_img">
        <img className="image" src={props.imgUri} alt="" />
      </div>

      <div className="card_info">
        <p className="text_title">
          <Link to={`/detail/${props.id}`}>{props.name}</Link>
        </p>
        <div className="text_body">
          <ul className="dietsList">
            {Array.isArray(props.diets) ? (
              props.diets.map((e,i) => {
                return <li key={i}>{e}</li>;
              })
            ) : (
              <p>Diets not available</p>
            )}
          </ul>
        </div>
      </div>
      <div className="card_footer">
        <div className="healthScore">
          <div className="healthInfo">
            <span>Health Score: </span>
            <span className="healthScore_number">{props.healthScore}%</span>
          </div>
          <div
            className="healthScore_percent"
            style={{ width: props.healthScore + "%" }}
          ></div>
        </div>
        <div className="card_button">
          <svg className="svg_icon" viewBox="0 0 20 20"></svg>
        </div>
      </div>
    </div>
  );
};

export default Card;
