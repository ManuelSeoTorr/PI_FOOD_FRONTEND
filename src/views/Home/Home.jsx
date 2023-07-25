import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, getDiets } from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";
import Filtro from "../../components/Filtro/Filtro";
import Order from "../../components/Order/Order";
import SearchBar from "../../components/SearchBar/searchBar";

import "./Home.css";



const Home = () => {
  
  const dispatch = useDispatch();
  const {filteredRecipes:apiRecipes} = useSelector((state) => state);


  //Paginado
  const [currentPage, setCurrentPage] = useState(1);

  const recipes_per_page = 9;
  const indexLastRecipe = currentPage * recipes_per_page;
  const indexFirstRecipe = indexLastRecipe - recipes_per_page;
  const currentRecipes = apiRecipes.slice(indexFirstRecipe, indexLastRecipe);

  const paginate = (pageNum) =>{
    setCurrentPage(pageNum);
  }
  //*
 //estados para filtros y ordenamientos
  const [filters, setFilters] = useState({});
  const [orderBy, setOrderBy] = useState("");
  
  const resetFiltersAndOrder = () => {
    setFilters({});
    setOrderBy("");
  };
  //reset
  const resetSearchBar = () => {
    dispatch(getRecipes());
    paginate(1);
  }
  //
  useEffect(() => {
    //cuando se monta home se hace el dispatch
    console.log("Se monto home");
    dispatch(getRecipes(filters, orderBy));
    dispatch(getDiets());
  }, [dispatch, filters, orderBy]);

  return (
    <div className="homeContainer">
      <div className="grid_container">
        <header className="header">
          <h1>FOOD-API</h1>
        </header>
        <nav className="navbar">
          <NavBar
            currentPage={currentPage}
            recipes_per_page={recipes_per_page}
            apiRecipes={apiRecipes.length}
            paginate={paginate}
          />
        </nav>
        <aside className="sidebar">
          <SearchBar paginate={paginate} resetSearchBar={resetSearchBar}/>
          <Filtro paginate={paginate} setFilters={setFilters}/>
          <Order paginate={paginate} setOrderBy={setOrderBy}/>
          <button className="resetAll" onClick={resetFiltersAndOrder}>Reset Sort and Filters</button>
        </aside>
        <article className="main">
          <CardsContainer currentRecipes={currentRecipes} />
        </article>
        <footer className="footer"><h4>by Manuel Seoane Torrealba</h4></footer>
      </div>
    </div>
  );
};

export default Home;
