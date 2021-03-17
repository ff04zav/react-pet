import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { first: "0", second: "0", operator: "mult" };
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log("");
    let result = 0;
    let state = this.state;
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
    this.props.onChange(String(result));
    this.setState({ first: "0", second: "0", operator: "mult" });
  };

  onChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          onChange={this.onChange}
          name="first"
          value={this.state.value1}
        />
        <select
          name="operator"
          value={this.state.oper}
          onChange={this.onChange}
        >
          <option value="add">+</option>
          <option value="sub">-</option>
          <option value="mult">*</option>
          <option value="div">/</option>
        </select>
        <input
          onChange={this.onChange}
          name="second"
          value={this.state.value2}
        />
        <button>Store result</button>
      </form>
    );
  }
}

export default Form;
