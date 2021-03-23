import React from "react";
import PropTypes from "prop-types";

import Row from "../Row";

const Table = (props) => {
  const deleteItem = (e) => {
    props.removeHandler(props.index);
  };

  return (
    <div className="pseudo-table">
      {props.list.map((item, index) => (
        <Row key={index} index={index} removeHandler={deleteItem} item={item} />
      ))}
    </div>
  );
};

Table.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
  removeHandler: PropTypes.func,
};

export default Table;
