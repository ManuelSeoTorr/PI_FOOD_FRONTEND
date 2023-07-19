import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getDiets, postRecipe } from "../../redux/actions";

const validate = (newRecipe) => {
  let errors = {};
  if (!newRecipe.name) {
    errors.name = "Nombre requerido";
  }
  if (!newRecipe.summary) {
    errors.summary = "Resumen requerido";
  }
  if (newRecipe.healthscore > 100 || newRecipe.healthscore < 0) {
    errors.healthscore = "El Healt Score debe ser entre 0 y 100";
  }

  return errors;
};

const createRecipe = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const diets = useSelector((state) => state.diets);

  const [newRecipeSteps, setNewRecipeSteps] = useState("");
  const [errors, setErrors] = useState({});
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    summary: "",
    healthScore: "",
    imgUri: "",
    steps: [],
    diets: [],
  });

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setNewRecipe({ ...newRecipe, [property]: value });
    setErrors(validate({ ...newRecipe, [property]: value }));
  };

  const handleCheckBox = (event) => {
    const checked = event.target.checked;
    const value = Number(event.target.value);
    if (checked) {
      setNewRecipe({ ...newRecipe, diets: [...newRecipe.diets, value] });
    }
  };

  const handleAddStep = (event) => {
    event.preventDefault();
    setNewRecipe({ ...newRecipe, steps: [...newRecipe.steps, newRecipeSteps] });
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
    if (newRecipe.name === "") alert("Missing title");
    if (newRecipe.summary === "") alert("Missing summary");
    // if (!newRecipe.imgUri) {
    //   setNewRecipe({
    //     ...newRecipe,
    //     imgUri:
    //       "https://pixabay.com/es/vectors/libro-cocinero-comer-comida-cocina-1292854/",
    //   });
    // }
    if (newRecipe.healthScore > 100 || newRecipe.healthScore < 0)
      alert("Health Score must be between 0 and 100");
    console.log(newRecipe);
    dispatch(
      postRecipe(
        newRecipe.imgUri
          ? newRecipe
          : {
              ...newRecipe,
              imgUri:
                "https://cdn.pixabay.com/photo/2018/03/02/13/38/vegetables-3193196_1280.jpg",
            }
      )
    );
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
    <div className="formContainer">
      <div className="backButton">
        <Link to="/home">
          <button>Back</button>
        </Link>
      </div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <section className="inputs">
          <div className="inputsText">
            <div>
              <label>Title: </label>
              <input
                type="text"
                className="input"
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
              {diets.map((diet, i) => {
                return (
                  <div className="checkOrganicer">
                    <p className="checkName">{diet.name}</p>
                    <input
                      type="checkbox"
                      className="dietCheck"
                      value={i+1}
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
            <textarea
              className="input"
              value={newRecipeSteps}
              onChange={(event) => setNewRecipeSteps(event.target.value)}
            />
            <div>
              <input
                type="submit"
                value="Add step"
                onClick={(event) => handleAddStep(event)}
              />
              <input
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
        <div className="submitButton">
          <button type="submit">Create recipe</button>
        </div>
      </form>
    </div>
  );
};

export default createRecipe;
