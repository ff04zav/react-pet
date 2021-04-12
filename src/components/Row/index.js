import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ListContext from "../../providers/ListContext";
import UpDownButton from "../UpDownButton";

const Row = ({ index }) => {
  const [list, setList] = React.useContext(ListContext);
  let prevValue;

  const deleteItem = () => {
    setList(list.filter((elem, i) => i !== index));
  };

  const handleName = (evt) => {
    updateList("name", evt.target.textContent);
  };

  const updateList = (prop, value) => {
    console.log(index);
    setList(
      list.map((elem, i) => {
        if (i !== index) return elem;
        return {
          ...elem,
          [prop]: value,
        };
      })
    );
  };

  const handleValue = (evt) => {
    if (!Number.isNaN(Number(evt.target.textContent))) {
      updateList("value", evt.target.textContent);
    } else {
      updateList("value", prevValue);
      evt.target.textContent = prevValue;
      console.log({ ...evt.target });
    }
  };

  const focusValue = (evt) => {
    prevValue = evt.target.textContent;
  };

  return (
    <div className="row">
      <div className="label text-truncate">
        <span
          onBlur={handleName}
          contentEditable="true"
          suppressContentEditableWarning={true}
        >
          {list.find((elem, i) => i === index).name}
        </span>
      </div>
      <div className="label text-truncate">
        <span
          onBlur={handleValue}
          onFocus={focusValue}
          contentEditable="true"
          suppressContentEditableWarning={true}
        >
          {list.find((elem, i) => i === index).value}
        </span>
      </div>
      <button className="btn btn-secondary align-top" onClick={deleteItem}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <UpDownButton index={index} direction="Up" />
      <UpDownButton index={index} direction="Down" />
    </div>
  );
};

Row.propTypes = {
  index: PropTypes.number,
};

export default Row;
