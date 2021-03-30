import React, { useState, useEffect, useCallback } from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const EditPopup = ({ oldValue, show, editHandler, hideEditHandler }) => {
  const onKeyUpValue = (event) => {
    console.log(event);
    if (event.keyCode === 13) {
      editHandler(event.target.value);
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

  const [innerValue, setInnerValue] = useState(oldValue);
  console.log(oldValue);
  console.log(innerValue);
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
            defaultValue={oldValue}
            onChange={onChange}
            onKeyUp={onKeyUpValue.bind(this)}
          />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default EditPopup;
