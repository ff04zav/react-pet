import React from "react";

import Row from "../Row";
import { connect } from "react-redux";

const Table = ({ list }) => {
  return (
    <div className="pseudo-table">
      {list.map((_item, index) => (
        <Row key={index} index={index} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.table,
  };
};

export default connect(mapStateToProps)(Table);
