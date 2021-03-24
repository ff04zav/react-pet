import React, { useState } from "react";
import Form from "../Form";
import Table from "../Table";
import EditPopup from "../EditPopup";

const Management = (props) => {
  const [list, setMemo] = useState([]);
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState(0);

  const onChange = (value) => {
    setMemo([value, ...list]);
  };

  const listRemoveHandler = (index) =>
    setMemo(list.filter((elem, i) => i !== index));

  const editHandler = (newValue) =>
    setMemo(list.map((item, j) => (j === editIndex ? newValue : item)));

  const showEditHandler = (index) => {
    setEditIndex(index);
    setShow(true);
  };

  const hideEditHandler = () => {
    setShow(false);
  };

  return (
    <div className="App">
      <Form onChange={onChange} />
      <Table
        showEditHandler={showEditHandler}
        removeHandler={listRemoveHandler}
        list={list}
      />
      <EditPopup
        oldValue={list[editIndex]}
        show={show}
        editHandler={editHandler}
        hideEditHandler={hideEditHandler}
      />
    </div>
  );
};

export default Management;
