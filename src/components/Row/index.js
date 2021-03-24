import React from "react";
import PropTypes from "prop-types";

const Row = ({ item, index, removeHandler }) => {
  const deleteItem = () => {
    removeHandler(index);
  };

  return (
    <div className="row">
      <div className="label"> {item} </div>{" "}
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
};

Row.propTypes = {
  item: PropTypes.string,
  index: PropTypes.number,
  removeHandler: PropTypes.func,
};

export default Row;
