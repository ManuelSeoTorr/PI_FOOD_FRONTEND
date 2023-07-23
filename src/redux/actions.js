import axios from "axios";
import {
  GET_RECIPES,
  GET_ID_RECIPE,
  GET_NAME_RECIPES,
  GET_DIETS,
  RESET_DETAIL,
  FILTER_BY_DIET,
  FILTER_BY_ORIGIN,
  SORT_BY_NAME,
  SORT_BY_HEALTH,
} from "./types";

export const getRecipes = () => {
  return async (dispatch) => {
    const apiData = await axios.get("http://localhost:3001/recipes");
    const recipes = apiData.data;
    console.log(apiData);
    dispatch({ type: GET_RECIPES, payload: recipes });
  };
};

export const getRecipeById = (id) => {
  return async (dispatch) => {
    const apiData = await axios.get(`http://localhost:3001/recipes/${id}`);
    const recipe = apiData.data;
    dispatch({ type: GET_ID_RECIPE, payload: recipe });
  };
};

export const getRecipesByName = (name) => {
  return async (dispatch) => {
    try {
      const apiData = await axios.get(
        `http://localhost:3001/recipes?name=${name}`
      );
      const recipes = apiData.data;
      dispatch({ type: GET_NAME_RECIPES, payload: recipes });
    } catch (error) {
      alert("Recipe not Found");
    }
  };
};

export const getDiets = () => {
  return async (dispatch) => {
    try {
      const apiData = await axios.get(`http://localhost:3001/diets`);
      const diets = apiData.data;
      dispatch({ type: GET_DIETS, payload: diets });
    } catch (error) {
      alert(error);
    }
  };
};

export const resetDetail = () => {
  return { type:RESET_DETAIL}
};

export const postRecipe = (newRecipe) => {
  return async () => {
    try {
      apiRecipe = await axios.post("http://localhost:3001/recipes", newRecipe);
    } catch (error) {
      alert(error);
    }
  };
};

export const filterByDiet = (diets) => {
  return { type: FILTER_BY_DIET, payload: diets };
};

export const filterByOrigin = (origin) => {
  return { type:FILTER_BY_ORIGIN, payload:origin}
};

export const sortByName = (order) => {
  return { type: SORT_BY_NAME, payload: order };
};

export const sortByHealth = (order) => {
  return { type: SORT_BY_HEALTH, payload: order };
};
