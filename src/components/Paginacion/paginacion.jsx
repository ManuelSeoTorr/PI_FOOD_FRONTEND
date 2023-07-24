import React from "react";
import "./paginacion.css"
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
        <div className="pagContainer">
            <button className="navButton" onClick={()=>paginate(currentPage-1)}> 🢀 Prev</button>
            {pageNum && pageNum.map(number=>{
                //return(<button className="numButton" key={number} onClick={()=>paginate(number)}>{number}</button>)
                return(<button className={`numButton ${number===currentPage?"activePag":null}`}key={number} onClick={() => paginate(number)}>{currentPage === number ? <b>{number}</b> : number}</button>)
            })}
            <button className="navButton" onClick={()=>paginate(currentPage+1)}>Next 🢂 </button>
        </div>
    )
};

export default Paginacion;