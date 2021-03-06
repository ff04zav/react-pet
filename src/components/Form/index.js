import React, { useState } from "react";
import { connect } from "react-redux";
import actions from "../../redux/table/table.actions";

const Form = ({ addToList }) => {
  const [form, setForm] = useState({
    first: "0",
    second: "0",
    name: "",
    operator: "mult",
  });

  const calcResult = () => {
    let result = 0;
    let v1 = Number(form.first);
    let v2 = Number(form.second);
    switch (form.operator) {
      case "add":
        result = v1 + v2;
        break;
      case "sub":
        result = v1 - v2;
        break;
      case "div":
        result = v1 / v2;
        break;
      default:
        result = v1 * v2;
    }
    return result;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let item = {};
    item.name = form.name;
    item.value = String(calcResult());
    addToList(item);
    setForm({
      first: "0",
      second: "0",
      name: "",
      operator: "mult",
    });
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const isValid = () => {
    return (
      Number.isInteger(Number(form.first)) &&
      Number.isInteger(Number(form.second)) &&
      (form.operator !== "div" || Number(form.second) !== 0)
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="nameInput">Name: </label>
        <input
          name="name"
          className="form-control"
          value={form.name}
          onChange={onChange}
          id="nameInput"
          placeholder="Enter name"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          onChange={onChange}
          name="first"
          value={form.first}
        />
        <select
          name="operator"
          className="form-control"
          value={form.operator}
          onChange={onChange}
        >
          <option value="add">+</option>
          <option value="sub">-</option>
          <option value="mult">*</option>
          <option value="div">/</option>
        </select>
        <input
          className="form-control"
          onChange={onChange}
          name="second"
          value={form.second}
        />
      </div>
      <button className="btn btn-primary align-top" disabled={!isValid()}>
        Store result
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToList: (item) => dispatch(actions.addToList(item)),
});

export default connect(null, mapDispatchToProps)(Form);
