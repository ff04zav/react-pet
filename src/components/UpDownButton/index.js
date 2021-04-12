import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import ListContext from "../../providers/ListContext";

const UpDownButton = ({ index, direction }) => {
  const [list, setList] = React.useContext(ListContext);

  const moveUpDown = () => {
    const siblingIndex = direction === "Up" ? index - 1 : index + 1;
    const siblingEl = list[siblingIndex];
    const currentEl = list[index];
    setList(
      list.map((elem, i) => {
        if (i !== siblingIndex && i !== index) return elem;
        return i === index ? siblingEl : currentEl;
      })
    );
  };

  if (
    (index === 0 && direction === "Up") ||
    (index === list.length - 1 && direction === "Down")
  ) {
    return null;
  }
  return (
    <button className="btn btn-secondary align-top" onClick={moveUpDown}>
      <FontAwesomeIcon icon={direction === "Up" ? faArrowUp : faArrowDown} />
    </button>
  );
};

UpDownButton.propTypes = {
  index: PropTypes.number,
  direction: PropTypes.string,
};

export default UpDownButton;
