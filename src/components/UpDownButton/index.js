import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import actions from "../../redux/table/table.actions";

const UpDownButton = ({ index, direction, list, swipeRows }) => {
  const moveUpDown = () => {
    const siblingIndex = direction === "Up" ? index - 1 : index + 1;
    swipeRows(siblingIndex, index);
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

const mapStateToProps = (state) => {
  return {
    list: state.table,
  };
};

const mapDispatchToProps = (dispatch) => ({
  swipeRows: (siblingIndex, index) =>
    dispatch(actions.swipeRows(siblingIndex, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpDownButton);
