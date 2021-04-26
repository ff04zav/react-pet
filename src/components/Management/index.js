import React, { useState } from "react";
import { connect } from "react-redux";
import Form from "../Form";
import Table from "../Table";
import ListContext from "../../providers/ListContext";
import updateList from "../../redux/table/table.actions";

const Management = () => {
  return (
    <div className="App">
      <Form />
      <Table />
    </div>
  );
};

export default Management;
