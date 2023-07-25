
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { filterByDiet, filterByOrigin } from "../../redux/actions";

const Filter = ({ paginate }) => {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);

  function handleFilterDiets(event) {
    dispatch(filterByDiet(event.target.value));
    paginate(1);
  }
 
  function handleFilterOrigin(event){
    dispatch(filterByOrigin(event.target.value));
    paginate(1);
  };
  return (
    <div className="filterCotainer">
      <span>Filter by Diets:</span>
      <select
        className="classic"
        onChange={(event) => handleFilterDiets(event)}
      >
        <option value="all">All types of diets</option>
        {diets?.map((diet) => {
          return (
            <option value={diet.name} key={diet.id}>
              {diet.name}
            </option>
          );
        })}
      </select>
      <span>Filter by Origin:</span>
      <select
        className="classic"
        onChange={(event) => handleFilterOrigin(event)}
      >
        <option value="all">All recipes</option>
        <option value="API">API only</option>
        <option value="DB">DB only</option>
      </select>
    </div>
  );
};

export default Filter;
