import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getDiets, postRecipe } from "../../redux/actions";
import recipeImgHolder from "../../assets/recipeImgHolder2.jpeg";
import { validate } from "./validate";
import { validateDiets } from "./validateDiets";
import "./Form.css"

const filterTrueProperties = (obj) => {
  return Object.entries(obj)
    .filter(([key, value]) => value === true)
    .map(([key]) => Number(key));
};

const createRecipe = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const diets = useSelector((state) => state.diets);

  const [checkboxes, setCheckboxes] = useState({});
  const [newRecipeSteps, setNewRecipeSteps] = useState([]);
  const [errors, setErrors] = useState({});
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    summary: "",
    healthScore: "",
    imgUri: recipeImgHolder,
    steps: [],
    diets: [],
  });

  useEffect(() => {
    dispatch(getDiets());
    const filteredDiets = filterTrueProperties(checkboxes);
    setNewRecipe({ ...newRecipe, diets: filteredDiets });
  }, [dispatch, checkboxes]);

  function isDisable() {
    return (
      !newRecipe.name ||
      !newRecipe.summary ||
      !newRecipe.healthScore ||
      !newRecipe.steps.length ||
      !Object.values(checkboxes).some((value) => value === true) ||
      errors.name ||
      errors.summary ||
      errors.healthScore ||
      errors.steps ||
      errors.imgUri ||
      errors.diets
    );
  }
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setNewRecipe({ ...newRecipe, [property]: value });
    setErrors(validate({ ...newRecipe, [property]: value }));
    console.log(errors);
  };

  const handleCheckBox = (event) => {
    const { value, checked } = event.target;
    setCheckboxes({ ...checkboxes, [value]: checked });
    setErrors(validateDiets({ ...checkboxes, [value]: checked }));
    console.log(errors);
  };

  const handleAddStep = (event) => {
    event.preventDefault();
    setNewRecipe({ ...newRecipe, steps: [...newRecipe.steps, newRecipeSteps] });
    setErrors(
      validate({ ...newRecipe, steps: [...newRecipe.steps, newRecipeSteps] })
    );
    setNewRecipeSteps("");
  };

  const handleDeleteLast = (event) => {
    event.preventDefault();
    newRecipe.steps.pop();
    setNewRecipe({ ...newRecipe });
    setNewRecipeSteps("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    console.log(filterTrueProperties(checkboxes));

    console.log(newRecipe)
    dispatch(postRecipe(newRecipe));
    alert("New recipe has been created");
    setNewRecipe({
      name: "",
      summary: "",
      healthScore: "",
      imgUri: "",
      steps: [],
      diets: [],
    });
    //history.push("/home");
  };

  return (
    <div className="formBackground">
      <div className="formContainer">
          <Link to="/home">
            <button className="backButton">Back</button>
          </Link>
        <form onSubmit={(event) => handleSubmit(event)}>
          <section className="inputs">
            <div className="inputsText">
              <div>
                <label>Title: </label>
                <input
                  type="text"
                  className="input"
                  placeholder="Title"
                  value={newRecipe.name}
                  name="name"
                  onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div>
                <label>Summary: </label>
                <textarea
                  className="input"
                  value={newRecipe.summary}
                  placeholder="Summary"
                  name="summary"
                  onChange={handleChange}
                />
                {errors.summary && <p className="error">{errors.summary}</p>}
              </div>
              <div>
                <label>Health Score: </label>
                <input
                  type="number"
                  className="input"
                  value={newRecipe.healthScore}
                  placeholder="Health Score(%)"
                  name="healthScore"
                  onChange={handleChange}
                />
                {errors.healthScore && (
                  <p className="error">{errors.healthScore}</p>
                )}
              </div>
            </div>
            <div className="inputsChecks">
              <fieldset className="checksContainer">
                <legend>Select one or multiple diets</legend>
                {errors.diets && <p className="error">{errors.diets}</p>}
                {diets.map((diet, i) => {
                  return (
                    <div className="checkOrganicer">
                      <p className="checkName">{diet.name}</p>
                      <input
                        type="checkbox"
                        className="dietCheck"
                        value={i + 1}
                        onChange={(event) => handleCheckBox(event)}
                      />
                    </div>
                  );
                })}
              </fieldset>
            </div>
          </section>
          <section className="steps">
            <div className="stepbystep">
              <legend>Steps: </legend>
              {errors.steps && <p className="error">{errors.steps}</p>}
              <textarea
                className="input"
                value={newRecipeSteps}
                onChange={(event) => setNewRecipeSteps(event.target.value)}
              />
              <div className="buttonContainer">
                <input
                className="stepButton"
                  type="submit"
                  value="Add step"
                  onClick={(event) => handleAddStep(event)}
                />
                <input
                className="stepButton"
                  type="submit"
                  value="Delete last"
                  onClick={(event) => handleDeleteLast(event)}
                />
              </div>
            </div>
            <div className="renderSteps">
              <ol>
                {newRecipe.steps.map((step) => {
                  return (
                    <>
                      <li>{step}</li>
                    </>
                  );
                })}
              </ol>
            </div>
          </section>
          

            <button className="submitButton" type="submit" disabled={isDisable()}>
              Create recipe
            </button>
        </form>
      </div>
    </div>
  );
};

export default createRecipe;
