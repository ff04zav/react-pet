import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Row = ({ item, index, removeHandler, showEditHandler }) => {
  const deleteItem = () => {
    removeHandler(index);
  };

  const editItem = () => {
    showEditHandler(index);
  };

  return (
    <div className="row">
      <div className="label text-truncate">
        <span>{item}</span>
      </div>
      <button className="btn btn-secondary align-top" onClick={editItem}>
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <button className="btn btn-secondary align-top" onClick={deleteItem}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

Row.propTypes = {
  item: PropTypes.string,
  index: PropTypes.number,
  removeHandler: PropTypes.func,
};

export default Row;
