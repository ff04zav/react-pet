import React, { useState, useContext } from "react";
import ListContext from "../../providers/ListContext";

const Form = () => {
  const [list, setMemo] = useContext(ListContext);
  const [form, setForm] = useState({
    first: "0",
    second: "0",
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
    let value = String(calcResult());
    setMemo([String(value), ...list]);
    setForm({
      first: "0",
      second: "0",
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
      <input onChange={onChange} name="first" value={form.first} />
      <select name="operator" value={form.operator} onChange={onChange}>
        <option value="add">+</option>
        <option value="sub">-</option>
        <option value="mult">*</option>
        <option value="div">/</option>
      </select>
      <input onChange={onChange} name="second" value={form.second} />
      <button className="btn btn-primary align-top" disabled={!isValid()}>
        Store result
      </button>
    </form>
  );
};

export default Form;
