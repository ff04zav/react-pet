import React, { useState } from "react";
import Form from "../Form";
import Table from "../Table";
import ListContext from "../../providers/ListContext";

const Management = () => {
  const [list, setList] = useState([]);

  return (
    <ListContext.Provider value={[list, setList]}>
      <div className="App">
        <Form />
        <Table />
      </div>
    </ListContext.Provider>
  );
};

export default Management;
