import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import Paginacion from "../Paginacion/paginacion";
import SearchBar from "../SearchBar/searchBar";

const NavBar = ({ currentPage, recipes_per_page, apiRecipes, paginate }) => {
  return (
    <div className={style.navContainer}>
      <Link to="/create">
        <button className="newRecipeButton">New Recipe +</button>
      </Link>
      <Link to="/about">
        <button className="aboutButton">About</button>
      </Link>
      <Paginacion
        currentPage={currentPage}
        recipes_per_page={recipes_per_page}
        apiRecipes={apiRecipes}
        paginate={paginate}
      />
    </div>
  );
};

export default NavBar;
