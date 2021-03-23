import React, { useState } from "react";

const Form = (props) => {
  const [form, setForm] = useState({
    first: "0",
    second: "0",
    operator: "mult",
    valid: true,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    let result = 0;
    let state = form;
    let v1 = Number(state.first);
    let v2 = Number(state.second);
    switch (state.operator) {
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
    props.onChange(String(result));
    setForm({
      first: "0",
      second: "0",
      operator: "mult",
      valid: true,
    });
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
      valid: isValid({ [name]: value }),
    });
  };

  const isValid = (diff) => {
    let state = Object.assign({}, form, diff);
    return (
      Number.isInteger(Number(state.first)) &&
      Number.isInteger(Number(state.second)) &&
      (state.operator !== "div" || Number(state.second) !== 0)
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
      <button disabled={!form.valid}>Store result</button>
    </form>
  );
};

export default Form;
