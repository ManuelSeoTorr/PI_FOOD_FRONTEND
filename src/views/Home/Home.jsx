import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, getDiets } from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";
import Filter from "../../components/Filter/filter";
import Order from "../../components/Order/Order";

import "./Home.css";



const Home = () => {
  
  const dispatch = useDispatch();
  const {filteredRecipes:apiRecipes} = useSelector((state) => state);
  const apiDiets = useSelector((state=>state.diets));

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

  useEffect(() => {
    //cuando se monta home se hace el dispatch
    console.log("Se monto home");
    dispatch(getRecipes());
    dispatch(getDiets());
  }, [dispatch]);

  return (
    <>
      <div className="grid_container">
        <header className="header">
          <h1>FOOD-API</h1>
          <h4>by Manuel Seoane Torrealba</h4>
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
          <Filter paginate={paginate}/>
          <Order paginate={paginate}/>
        </aside>
        <article className="main">
          <CardsContainer currentRecipes={currentRecipes} />
        </article>
        <footer className="footer">FOOTER</footer>
      </div>
    </>
  );
};

export default Home;
