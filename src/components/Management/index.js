import React, { useState } from "react";
import Form from "../Form";
import Table from "../Table";

const Management = (props) => {
  const [memo, setMemo] = useState({
    list: [],
  });

  const onChange = (value) => {
    setMemo((memo) => ({
      list: [value, ...memo.list],
    }));
  };

  const listRemoveHandler = (index) => {
    const list = [...memo.list];
    list.splice(index, 1);
    setMemo({ list });
  };

  return (
    <div className="App">
      <Form onChange={onChange} />
      <Table removeHandler={listRemoveHandler} list={memo.list} />
    </div>
  );
};

export default Management;
