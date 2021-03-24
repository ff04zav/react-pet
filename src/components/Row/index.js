import React from "react";
import PropTypes from "prop-types";

const Row = ({ item, index, removeHandler, showEditHandler }) => {
  const deleteItem = () => {
    removeHandler(index);
  };

  const editItem = () => {
    showEditHandler(index);
  };

  return (
    <div className="row">
      <div className="label"> {item} </div>{" "}
      <button onClick={editItem}>Edit</button>
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
