import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipesByName } from "../../redux/actions";

import "./searchBar.css";

const SearchBar = ({ paginate, reset }) => {
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
        className="buttonAdd"
        onClick={() => {
          handleSearch(name);
        }}
      >
        Search
      </button>
      <button className="buttonrecet" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default SearchBar;
