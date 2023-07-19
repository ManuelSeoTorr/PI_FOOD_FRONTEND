import React from "react";
import style from "./paginacion.module.css"
const Paginacion = ({currentPage, recipes_per_page, apiRecipes, paginate }) => {
    const pageNum = [];

    for (let i = 0; i < Math.ceil(apiRecipes / recipes_per_page); i++){
        pageNum.push(i+1);
    }

    if (currentPage === pageNum.length + 1){
        paginate(1)
    }
    if (currentPage === 0){
        paginate(pageNum.length)
    }
    return(
        <div className={style.pagContainer}>
            <button onClick={()=>paginate(currentPage-1)}> 🢀 Prev</button>
            {pageNum && pageNum.map(number=>{
                return(<button key={number} onClick={()=>paginate(number)}>{number}</button>)
            })}
            <button onClick={()=>paginate(currentPage+1)}>Next 🢂 </button>
        </div>
    )
};

export default Paginacion;