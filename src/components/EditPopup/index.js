import React, { useState, useEffect, useCallback, useContext } from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ListContext from "../../providers/ListContext";

const EditPopup = ({ show, editIndex, hideEditHandler }) => {
  const [list, setMemo] = useContext(ListContext);
  const editHandler = (newValue) =>
    setMemo(list.map((item, j) => (j === editIndex ? newValue : item)));

  const onKeyUpValue = (event) => {
    if (event.keyCode === 13) {
      if (isNaN(innerValue)) {
        alert(innerValue + " is not a valid number");
        return;
      }
      editHandler(innerValue);
      hideEditHandler();
    }
  };

  const onChange = (e) => {
    setInnerValue(e.target.value);
  };

  const escFunction = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        hideEditHandler();
      }
    },
    [hideEditHandler]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  const [innerValue, setInnerValue] = useState(list[editIndex]);
  if (show) {
    return (
      <div className="popup">
        <div className="head show" id="myPopupHead">
          <div onClick={hideEditHandler} className="icon-wrapper">
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
        <div className="popuptext show" id="myPopup">
          <span>New value: </span>
          <input
            type="text"
            defaultValue={list[editIndex]}
            onChange={onChange}
            onKeyUp={onKeyUpValue.bind(this)}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default EditPopup;
