import React, { useState } from "react";
import Form from "../Form";
import Table from "../Table";

const Management = (props) => {
  const [list, setMemo] = useState([]);

  const onChange = (value) => {
    setMemo([value, ...list]);
  };

  const listRemoveHandler = (index) =>
    setMemo(list.filter((elem, i) => i !== index));

  return (
    <div className="App">
      <Form onChange={onChange} />
      <Table removeHandler={listRemoveHandler} list={list} />
    </div>
  );
};

export default Management;
