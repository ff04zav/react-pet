import React from "react";
import PropTypes from "prop-types";

const Row = (props) => {
  const deleteItem = (e) => {
    props.removeHandler(props.index);
  };

  return (
    <div className="row">
      <div className="label"> {props.item} </div>{" "}
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
