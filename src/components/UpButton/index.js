import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import ListContext from "../../providers/ListContext";

const UpButton = ({ index }) => {
  const [list, setMemo] = React.useContext(ListContext);
  const moveUp = () => {
    let upperEl = list[index - 1];
    let currentEl = list[index];
    setMemo(
      list.map((elem, i) => {
        if (i < index - 1 || i > index) return elem;
        return i === index ? upperEl : currentEl;
      })
    );
  };

  if (index === 0) return null;
  return (
    <button className="btn btn-secondary align-top" onClick={moveUp}>
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

UpButton.propTypes = {
  index: PropTypes.number,
};

export default UpButton;
