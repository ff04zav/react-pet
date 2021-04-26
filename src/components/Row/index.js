import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ListContext from "../../providers/ListContext";
import UpDownButton from "../UpDownButton";
import { connect } from "react-redux";
import actions from "../../redux/table/table.actions";

const Row = ({ index, updateList, deleteItem, list }) => {
  let prevValue;

  const deleteButtonHandler = () => {
    deleteItem(index);
  };

  const handleName = (evt) => {
    updateRow("name", evt.target.textContent);
  };

  const updateRow = (prop, value) => {
    updateList(index, prop, value);
  };

  const handleValue = (evt) => {
    if (!Number.isNaN(Number(evt.target.textContent))) {
      updateRow("value", evt.target.textContent);
    } else {
      evt.target.textContent = prevValue;
    }
  };

  const focusValue = (evt) => (prevValue = evt.target.textContent);
  const row = list.find((elem, i) => i === index);
  return (
    <div className="row">
      <div className="label text-truncate">
        <span
          onBlur={handleName}
          contentEditable="true"
          suppressContentEditableWarning={true}
        >
          {row.name}
        </span>
      </div>
      <div className="label text-truncate">
        <span
          onBlur={handleValue}
          onFocus={focusValue}
          contentEditable="true"
          suppressContentEditableWarning={true}
        >
          {row.value}
        </span>
      </div>
      <button
        className="btn btn-secondary align-top"
        onClick={deleteButtonHandler}
      >
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

const mapStateToProps = (state) => {
  return {
    list: state.table,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateList: (index, prop, value) =>
    dispatch(actions.updateList(index, prop, value)),
  deleteItem: (index) => dispatch(actions.deleteItem(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Row);
