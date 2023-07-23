import {
  GET_RECIPES,
  GET_NAME_RECIPES,
  GET_ID_RECIPE,
  GET_DIETS,
  RESET_DETAIL,
  FILTER_BY_DIET,
  FILTER_BY_ORIGIN,
  SORT_BY_NAME,
  SORT_BY_HEALTH,
} from "./types";

const initialState = {
  allRecipes: [],
  filteredRecipes: [],
  idRecipe: [],
  diets: [],
};

const isUUID = (id) => {
  const regexExp =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  return regexExp.test(id);
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

    case RESET_DETAIL:
      return { ...state, idRecipe: {} };

    case FILTER_BY_DIET:
      const resultDiet = state.allRecipes;
      if (action.payload === "all") {
        return {
          ...state,
          filteredRecipes: state.allRecipes,
        };
      } else {
        const filter = resultDiet.filter((recipe) =>
          recipe.diets?.some((diet) => diet === action.payload)
        );
        return {
          ...state,
          filteredRecipes: filter,
        };
      }

    case FILTER_BY_ORIGIN:
      const resultOrigin = state.allRecipes;
      if (action.payload === "all") {
        return {
          ...state,
          filteredRecipes: state.allRecipes,
        };
      } else if (action.payload === "API") {
        const filter = resultOrigin.filter((recipe) => !isNaN(recipe.id));
        return {
          ...state,
          filteredRecipes: filter,
        };
      } else if (action.payload === "DB") {
        const filter = resultOrigin.filter((recipe) => isUUID(recipe.id));
        return {
          ...state,
          filteredRecipes: filter,
        };
      }

    case SORT_BY_NAME:
      let sortedName = [];
      if (action.payload === "AZ") {
        sortedName = state.filteredRecipes.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          if (b.name.toLowerCase() > a.name.toLowerCase()) {
            return -1;
          }
          return 0;
        });
      } else {
        sortedName = state.filteredRecipes.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return -1;
          }
          if (b.name.toLowerCase() > a.name.toLowerCase()) {
            return 1;
          }
          return 0;
        });
      }
      return { ...state, filteredRecipes: sortedName };

    case SORT_BY_HEALTH:
      let sortedHS = [];
      if (action.payload === "+hs") {
        sortedHS = state.filteredRecipes.sort((a, b) => {
          if (a.healthScore > b.healthScore) {
            return -1;
          }
          if (b.healthScore > a.healthScore) {
            return 1;
          }
          return 0;
        });
      } else {
        sortedHS = state.filteredRecipes.sort((a, b) => {
          if (a.healthScore > b.healthScore) {
            return 1;
          }
          if (b.healthScore > a.healthScore) {
            return -1;
          }
          return 0;
        });
      }
      return { ...state, filteredRecipes: sortedHS };

    default:
      return { ...state };
  }
};

export default rootReducer;
