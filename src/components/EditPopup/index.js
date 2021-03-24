import React, { useState, useEffect, useCallback } from "react";
import "./styles.scss";

const EditPopup = ({ oldValue, show, editHandler, hideEditHandler }) => {
  const [value] = useState(oldValue);

  const onKeyUpValue = (event) => {
    console.log(event);
    if (event.keyCode === 13) {
      editHandler(event.target.value);
      hideEditHandler();
    }
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

  if (show) {
    return (
      <div className="popup">
        <div className="popuptext show" id="myPopup">
          <span>New value: </span>
          <input type="text" value={value} onKeyUp={onKeyUpValue.bind(this)} />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default EditPopup;
