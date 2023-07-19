import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, getDiets } from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";
import Filter from "../../components/Filter/filter";
import Order from "../../components/Order/Order";

import style from "./Home.module.css";



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
      <div className={style.grid_container}>
        <header className={style.header}>HEADER</header>
        <nav className={style.navbar}>
          <NavBar
            currentPage={currentPage}
            recipes_per_page={recipes_per_page}
            apiRecipes={apiRecipes.length}
            paginate={paginate}
          />
        </nav>
        <aside className={style.sidebar}>
          SIDEBAR
          <Filter paginate={paginate}/>
          <Order paginate={paginate}/>
        </aside>
        <article className={style.main}>
          <CardsContainer currentRecipes={currentRecipes} />
        </article>
        <footer className={style.footer}>FOOTER</footer>
      </div>
    </>
  );
};

export default Home;
