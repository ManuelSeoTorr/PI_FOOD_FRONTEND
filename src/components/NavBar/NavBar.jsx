import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import Paginacion from "../Paginacion/paginacion";
import SearchBar from "../SearchBar/searchBar";

const NavBar = ({ currentPage, recipes_per_page, apiRecipes, paginate }) => {
  return (
    <div className={style.navContainer}>
      <Link to="/home">HOME</Link>
      <Link to="/create">FORM</Link>
      <Link to="/about">ABOUT</Link>
      <SearchBar paginate={paginate}/>
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
