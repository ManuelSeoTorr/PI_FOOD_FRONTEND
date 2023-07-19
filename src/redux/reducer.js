import {
  GET_RECIPES,
  GET_NAME_RECIPES,
  GET_ID_RECIPE,
  GET_DIETS,
  FILTER_BY_DIET,
  SORT_BY_NAME,
  SORT_BY_HEALTH,
} from "./types";

const initialState = {
  allRecipes: [],
  filteredRecipes: [],
  idRecipe: [],
  diets: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        allRecipes: action.payload,
        filteredRecipes: action.payload,
      };

    case GET_NAME_RECIPES:
      return { ...state, filteredRecipes: action.payload };

    case GET_ID_RECIPE:
      return { ...state, idRecipe: action.payload };

    case GET_DIETS:
      return { ...state, diets: action.payload };

    case FILTER_BY_DIET:
      const result = state.allRecipes;
      if (action.payload === "all") {
        return {
          ...state,
          filteredRecipes: state.allRecipes,
        };
      } else {
        const filter = result.filter((recipe) =>
          recipe.diets?.some((diet) => diet === action.payload)
        );
        return {
          ...state,
          filteredRecipes: filter,
        };
      }

    case SORT_BY_NAME:
      let orderedRecipes = [];
      if (action.payload === "AZ") {
        orderedRecipes = state.filteredRecipes.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          if (b.name.toLowerCase() > a.name.toLowerCase()) {
            return -1;
          }
          return 0;
        });
      } else {
        orderedRecipes = state.filteredRecipes.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return -1;
          }
          if (b.name.toLowerCase() > a.name.toLowerCase()) {
            return 1;
          }
          return 0;
        });
      }
      return { ...state, filteredRecipes: orderedRecipes };

    default:
      return { ...state };
  }
};

export default rootReducer;
