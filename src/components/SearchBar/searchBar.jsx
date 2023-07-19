import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipesByName } from "../../redux/actions";

import style from "./searchBar.module.css";

const SearchBar = ({paginate}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  function handleSearch() {
    console.log(name);
    const recipes = getRecipesByName(name);
    dispatch(recipes);
    setName("");
    paginate(1);
  }

  return (
    <div className="searchContainer">
      <input type="search" onChange={handleChange} />
      <button
        className={style.buttonAdd}
        onClick={() => {
          handleSearch(name);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
