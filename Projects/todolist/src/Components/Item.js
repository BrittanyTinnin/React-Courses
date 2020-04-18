import React from "react";

const Item = (props) => {
  if (props.item) {
    return <div className="content">{props.item}</div>;
  }
};

export default Item;
