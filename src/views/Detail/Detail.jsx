import { useDispatch, useSelector } from "react-redux";
import { getRecipeById, resetDetail } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Detail.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    console.log("se monto el detail");
    dispatch(getRecipeById(id));
    return () => dispatch(resetDetail());
  }, [id]);

  const recipeDetail = useSelector((state) => state.idRecipe);

  console.log(id);

  return (
    <div className="detailBackground">
      <div className="detailContainer">
        <Link to={"/home"}>
          <button className="buttonBack">Back</button>
        </Link>
        <div className="infoContainer">
          <div className="infoText">
            <h1 className="recipe_Title">{recipeDetail.name}</h1>
            <div className="recipe_Summary">
              <h3>Summary:</h3>
              <p>{recipeDetail.summary}</p>
            </div>
          </div>
          <div className="dataContainer">
          <div className="imgContainer">
            <img className="img" src={recipeDetail.imgUri} alt="" />
          </div>
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
        </div>
        <div className="stepsContainer">
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
    </div>
  );
};

export default Detail;

