import React, { PureComponent } from "react";

const Item = (props) => {
  return (
    <div>
      <label>{props.item}</label>
    </div>
  );
};

export default Item;
