import React from "react";

import Row from "../Row";
import ListContext from "../../providers/ListContext";

const Table = () => {
  const [list] = React.useContext(ListContext);
  return (
    <div className="pseudo-table">
      {list.map((_item, index) => (
        <Row key={index} index={index} />
      ))}
    </div>
  );
};

Table.propTypes = {};

export default Table;
