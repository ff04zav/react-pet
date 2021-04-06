import React, { useState } from "react";
import Form from "../Form";
import Table from "../Table";
import EditPopup from "../EditPopup";
import ListContext from "../../providers/ListContext";

const Management = (props) => {
  const [list, setMemo] = useState([]);
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState(0);

  const showEditHandler = (index) => {
    setEditIndex(index);
    setShow(true);
  };

  const hideEditHandler = () => {
    setShow(false);
  };

  return (
    <ListContext.Provider value={[list, setMemo]}>
      <div className="App">
        <Form />
        <Table showEditHandler={showEditHandler} />
        <EditPopup
          show={show}
          editIndex={editIndex}
          hideEditHandler={hideEditHandler}
        />
      </div>
    </ListContext.Provider>
  );
};

export default Management;
