import React from "react";

const Item = (props) => {
  if (props.item) {
    return <div>{props.item}</div>;
  }
};

export default Item;
