import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { filterByDiet } from "../../redux/actions";


const Filter = ({ paginate }) => {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets)

  function handleFilterDiets(event) {
    dispatch(filterByDiet(event.target.value));
    paginate(1);
  }

  return (
    <select className="classic" onChange={(event) => handleFilterDiets(event)}>
      <option value="all">Todos los tipos de receta</option>
      {diets?.map((diet) => {
        return (
          <option value={diet.name} key={diet.id}>
            {diet.name}
          </option>
        );
      })}
    </select>
  );
};

export default Filter;
