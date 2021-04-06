import React from "react";
import PropTypes from "prop-types";

import Row from "../Row";
import ListContext from "../../providers/ListContext";

const Table = ({ showEditHandler }) => {
  const [list] = React.useContext(ListContext);
  return (
    <div className="pseudo-table">
      {list.map((item, index) => (
        <Row
          key={index}
          index={index}
          showEditHandler={showEditHandler}
          item={item}
        />
      ))}
    </div>
  );
};

Table.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
  removeHandler: PropTypes.func,
};

export default Table;
