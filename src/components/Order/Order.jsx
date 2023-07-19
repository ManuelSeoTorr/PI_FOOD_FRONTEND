import React from "react";
import { useDispatch } from "react-redux";
import { sortByName } from "../../redux/actions";

const Order = ({ paginate }) => {
  const dispatch = useDispatch();

  function handleSortName(event) {
    dispatch(sortByName(event.target.value));
    paginate(1);
  }

  return (
    <select className="classic" onChange={(event) => handleSortName(event)}>
      <option value="">Orden Alfabético</option>
      <option value="AZ">A-Z</option>
      <option value="ZA">Z-A</option>
    </select>
  );
};

export default Order;
