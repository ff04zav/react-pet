import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ListContext from "../../providers/ListContext";
import UpButton from "../UpButton";
import DownButton from "../DownButton";

const Row = ({ item, index, showEditHandler }) => {
  const [list, setMemo] = React.useContext(ListContext);
  const deleteItem = () => {
    setMemo(list.filter((elem, i) => i !== index));
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
      <UpButton index={index} />
      <DownButton index={index} />
    </div>
  );
};

Row.propTypes = {
  item: PropTypes.string,
  index: PropTypes.number,
  showEditHandler: PropTypes.func,
};

export default Row;
