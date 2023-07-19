import { useDispatch, useSelector } from "react-redux";
import { getRecipeById } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    console.log("se monto el detail");
    dispatch(getRecipeById(id));
    console.log("despache");
  }, [id]);

  const recipeDetail = useSelector((state) => state.idRecipe);

  console.log(id);

  return (
    <div className={style.detailContainer}>
      <div className={style.margin}></div>
      <div className={style.infoContainer}>
        <h2 className={style.recipe_Title}>{recipeDetail.name}</h2>
        <div className="recipe_Summary">
          <h3>Summary:</h3>
          <p>{recipeDetail.summary}</p>
        </div>
      </div>
      <div className={style.imgContainer}>
        <img className={style.img} src={recipeDetail.imgUri} alt=""/>
        <div className="diets_Info">
          <h4 className="diets">Diets:</h4>
          <ol>
            {Array.isArray(recipeDetail.diets) ? (
              recipeDetail.diets.map((e) => {
                return <li>{e}</li>;
              })
            ) : (
              <p>Diets not available</p>
            )}
          </ol>
          <div>
            <h4>Health Score:</h4>
            <p>{recipeDetail.healthScore}%</p>
          </div>
        </div>
      </div>
      <div className={style.stepsContainer}>
        <h4 className="steps">Step by step:</h4>
        <ol>
          {Array.isArray(recipeDetail.steps) ? (
            recipeDetail.steps.map((e) => {
              return <li>{e}</li>;
            })
          ) : (
            <p>Steps not available</p>
          )}
        </ol>
      </div>
    </div>
  );
};

export default Detail;
{
  /* <div className={style.buttonBack}>
<Link to={"/home"}>
  <button>Back</button>
</Link>
</div>
<div className={style.main_Info}>
<div className={style.imgContainer}>
  <img src={recipeDetail.imgUri} alt="" />
  <div className="diets_Info">
    <h4 className="diets">Diets:</h4>
    <ol>
      {Array.isArray(recipeDetail.diets) ? (
        recipeDetail.diets.map((e) => {
          return <li>{e}</li>;
        })
      ) : (
        <p>Diets not available</p>
      )}
    </ol>
    <div>
      <h4>Health Score:</h4>
      <p>{recipeDetail.healthScore}%</p>
    </div>
  </div>
</div>
<div className={style.main_Text}>
  <h2 className={style.recipe_Title}>{recipeDetail.name}</h2>
  <div className="recipe_Summary">
    <h3>Summary:</h3>
    <p>{recipeDetail.summary}</p>
  </div>
</div>
</div>
<div className={style.recipe_Info}>
<div className="steps_Info">
  <h4 className="steps">Step by step:</h4>
  <ol>
    {Array.isArray(recipeDetail.steps) ? (
      recipeDetail.steps.map((e) => {
        return <li>{e}</li>;
      })
    ) : (
      <p>Steps not available</p>
    )}
  </ol>
</div>
</div> */
}
