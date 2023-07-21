import React from "react";
import { useDispatch } from "react-redux";
import { sortByHealth, sortByName } from "../../redux/actions";

const Order = ({ paginate }) => {
  const dispatch = useDispatch();

  function handleSortName(event) {
    if(event.target.value === "AZ" || event.target.value === "ZA"){
      dispatch(sortByName(event.target.value));
    } else {
      dispatch(sortByHealth(event.target.value));
    }
    paginate(1);
  }

  return (
    <select className="classic"  onChange={(event) => handleSortName(event)}>
      <option value="AZ">SORT</option>
      <optgroup label="AlphabeticalOrder">
      <option value="AZ">A-Z</option>
      <option value="ZA">Z-A</option>
      </optgroup>
      <optgroup label="Helth Score">
        <option value="+hs">+Healthy</option>
        <option value="-hs">-Healthy</option>
      </optgroup>

    </select>
  );
};

export default Order;
