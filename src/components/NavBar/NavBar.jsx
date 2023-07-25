import { Link } from "react-router-dom";
import "./NavBar.css";
import Paginacion from "../Paginacion/paginacion";

const NavBar = ({ currentPage, recipes_per_page, apiRecipes, paginate }) => {
  return (
    <div className="navContainer">
      <div className="navCreate">
        <Link to="/create">
          <button className="newRecipeButton">New Recipe +</button>
        </Link>
      </div>
      <Paginacion
        currentPage={currentPage}
        recipes_per_page={recipes_per_page}
        apiRecipes={apiRecipes}
        paginate={paginate}
      />
      <div className="navAbout">
        <Link to="/about">
          <button className="aboutButton">About</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
