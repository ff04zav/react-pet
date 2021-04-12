import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import ListContext from "../../providers/ListContext";

const DownButton = ({ index }) => {
  const [list, setList] = React.useContext(ListContext);
  const moveDown = () => {
    const lowerEl = list[index + 1];
    const currentEl = list[index];
    setList(
      list.map((elem, i) => {
        if (i < index || i > index + 1) return elem;
        return i === index ? lowerEl : currentEl;
      })
    );
  };

  if (index === list.length - 1) return null;
  return (
    <button className="btn btn-secondary align-top" onClick={moveDown}>
      <FontAwesomeIcon icon={faArrowDown} />
    </button>
  );
};

DownButton.propTypes = {
  index: PropTypes.number,
};

export default DownButton;
