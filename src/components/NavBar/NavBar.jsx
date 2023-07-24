import { Link } from "react-router-dom";
import "./NavBar.css";
import Paginacion from "../Paginacion/paginacion";


const NavBar = ({ currentPage, recipes_per_page, apiRecipes, paginate }) => {
  return (
    <div className="navContainer">
      <Link to="/create">
        <button className="newRecipeButton">New Recipe +</button>
      </Link>
      <Paginacion
        currentPage={currentPage}
        recipes_per_page={recipes_per_page}
        apiRecipes={apiRecipes}
        paginate={paginate}
      />
      <Link to="/about">
        <button className="aboutButton">About</button>
      </Link>
    </div>
  );
};

export default NavBar;
