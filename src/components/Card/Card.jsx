import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={style.card}>
      <div className={style.card_img}>
        <img className={style.image} src={props.imgUri} alt="" />
      </div>

      <div className={style.card_info}>
        <p className={style.text_title}>
          <Link to={`/detail/${props.id}`}>{props.name}</Link>
        </p>
        <p className={style.text_body}>
          <ul className={style.dietsList}>
            {Array.isArray(props.diets) ? (
              props.diets.map((e) => {
                return <li>{e}</li>;
              })
            ) : (
              <p>Diets not available</p>
            )}
          </ul>
        </p>
      </div>
      <div className={style.card_footer}>
        <div className={style.healthScore}>
          <span className={style.healthScore_number}>{props.healthScore}%</span>
          <div
            className={style.healthScore_percent}
            style={{ width: props.healthScore + "%" }}
          ></div>
        </div>
        <div className={style.card_button}>
          <svg className={style.svg_icon} viewBox="0 0 20 20"></svg>
        </div>
      </div>
    </div>
  );
};

export default Card;

{
  /* <div className={style.card}>
            <p>Aca una card</p>
            <p>{props.name}</p>
            <p>{props.imgUri}</p>
            <p>Types of diets:{props.diets}</p>
        </div> */
}
